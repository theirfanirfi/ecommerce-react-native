import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Input, Item } from 'native-base';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        borderColor: 'white',
    },
    field: {
        fontSize: 18,
        color: 'white',
        borderWidth: 1,
        borderColor: "white",
        height: 47,
        paddingLeft: 10
    },
    title: {
        color: 'white',
        fontFamily: "Roboto-Medium"
    },
    // item: {
    //     paddingLeft: 10
    // }
});

const CustomTextInput = ({
    title,
    inputStyles,
    placeholderTextColor,
    placeholder,
    value,
    secureTextEntry,
    handleTextFieldChange,
    keyboardType,
    maxLength,
    textContentType,
    type,
}) => {
    return (
        <View style={styles.container} >
            {title && <Text style={styles.title}>{title}</Text>}
            {/* <Item regular style={styles.item}> */}
            <TextInput
                style={[styles.field, { ...inputStyles }]}
                // style={styles.field}
                placeholderTextColor={placeholderTextColor}
                placeholder={placeholder}
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={(text) => { handleTextFieldChange(text) }}
                keyboardType={keyboardType}
                maxLength={maxLength}
                selectionColor="red"

            // onBlur={(event) => handTextFieldBlur && handTextFieldBlur(event)}
            // autoCapitalize="none"
            // textContentType={textContentType}
            // autoFocus={autoFocus}
            />
            {/* </Item> */}
        </View>
    );
}

CustomTextInput.propTypes = {
    // props
    inputStyles: PropTypes.shape({}),
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    maxLength: PropTypes.number.isRequired,
    textContentType: PropTypes.string,
    keyboardType: PropTypes.string,
    // secureTextEntry: propTypes.b,
    // methods
    handleTextFieldChange: PropTypes.func.isRequired,
    // handTextFieldBlur: PropTypes.func,
};

CustomTextInput.defaultProps = {
    // handTextFieldBlur: null,
    inputStyles: {},
    keyboardType: 'default',
    // secureTextEntry: false,
    textContentType: 'name'

}

export { CustomTextInput }