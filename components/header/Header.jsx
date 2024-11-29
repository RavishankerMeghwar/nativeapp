import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../src/colors';
import { useNavigation } from '@react-navigation/native';
export default function Header() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backBtn}>
                <Icon
                    name='arrow-back-sharp'
                    color={COLORS.primary}
                    size={20}
                />
            </TouchableOpacity>
            <Image
                source={require('../../src/assets/images/logo-1.png')}
                resizeMode="contain"
                style={styles.Logo}
            />
            <TouchableOpacity>
                <Icon
                    color={'#000'}
                    size={22}
                    name='search' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Logo: {
        width: 150,
        marginTop: -8
    },
    backBtn: {
        backgroundColor: '#F9F9F9',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#DFDFDF',
        borderRadius: 40,
        borderWidth: 1
    }
})
