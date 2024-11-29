import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Menu, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logout } from '../../src/my-store/reducer';
import Api from '../../src/helpers/Api';
export default function TopBar() {
    const navigation = useNavigation();
    const [menuVisible, setMenuVisible] = useState(false);

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const [isLoading, setIsLoading] = React.useState(false);
    const dispatch = useDispatch();

    const handlelogout = async () => {
        setIsLoading(true)
        Api.path('users/logout').post()
        .then(body => {
                dispatch(logout());
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
            })
    }

    return (
        <View style={styles.container}>
            {/* Logo on the left */}
            <Image
                source={require('../../src/assets/images/logo_2.png')}
                resizeMode="contain"
                style={styles.logo}
            />

            {/* Profile dropdown on the right */}
            <Menu
                visible={menuVisible}
                onDismiss={closeMenu}
                anchor={
                    <TouchableOpacity onPress={openMenu}>
                        <Avatar.Icon
                            icon="account"
                            size={40}
                            color="#fff"
                            style={styles.profileIcon}
                        />
                    </TouchableOpacity>
                }
            >
                <Menu.Item
                    onPress={() => {
                        closeMenu();
                        navigation.navigate('Profile');
                    }}
                    title="Profile"
                />
                <Menu.Item
                    onPress={() => {
                        closeMenu();
                        navigation.navigate('Settings');
                    }}
                    title="Settings"
                />
                <Menu.Item
                    onPress={() => {
                        handlelogout()
                        closeMenu();
                    }}
                    title="Logout"
                />
            </Menu>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        // backgroundColor: '#6200ea', 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        width: "100%",

    },
    logo: {
        width: 120,
        height: 40,
    },
    profileIcon: {
        backgroundColor: '#03dac6',
    },
});
