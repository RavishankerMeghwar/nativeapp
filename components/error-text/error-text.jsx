import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import { COLORS } from '../../src/colors';

export default function ErrorText({ error }) {
    return (
        <Text
            style={styles.errorTxt}
        >
            {error}
        </Text>
    );
}

const styles = StyleSheet.create({
    errorTxt: {
        fontSize: 13,
        color: COLORS.orange,
        fontFamily: 'Inter-Regular',
        marginTop: 5
    },
});