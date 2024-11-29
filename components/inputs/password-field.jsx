import React, { useState } from 'react';
import {
    Platform,
    StyleSheet,
    TextInput,
} from 'react-native';
import { COLORS } from '../../src/colors';
import ErrorText from '../error-text/error-text';

export default function CustomPasswordField(props) {
    const { placeholderTxt, placeholderTxtColor, updateValue, defaultValue, req, mxL, handleInput, inputError } = props;
    const [input, setInput] = useState('');

    React.useEffect(() => {
        if (updateValue) {
            setInput(updateValue);
        }
    }, []);

    const handleChange = (v) => {
        handleInput(v);
        setInput(v);
    }

    return (
        <>
            <TextInput
                style={[styles.inputStyles, inputError !== '' && styles.error]}
                placeholder={placeholderTxt ?? ''}
                placeholderTextColor={!!placeholderTxtColor ? placeholderTxtColor : "#B6B6B6"}
                secureTextEntry={true}
                value={input}
                // autoCapitalize='off'
                autoComplete='off'
                autoCorrect={false}
                textContentType='none'
                required={req ?? false}
                maxLength={mxL ?? 16}
                defaultValue={defaultValue ?? ''}
                onChangeText={text => handleChange(text)}
            />
            {inputError !== '' ?
                <ErrorText error={inputError} />
                :
                null
            }
        </>
    );
}

const styles = StyleSheet.create({
    inputStyles: {
        borderWidth: 1,
        borderColor: "lightgray",
        fontFamily: 'Inter-Regular',
        borderRadius: 4,
        paddingLeft: 15,
        paddingVertical: 6,
        marginTop: 20,
        color: '#000',
        // ...Platform.select({
        //     ios: {
        //         height: 40
        //     }
        // })
    },
    error: {
        borderColor: COLORS.orange,
    },
});