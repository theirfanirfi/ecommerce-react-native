import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
    title: {
        color: 'white',
    }
});

const TouchableText = ({ text, customTextStyles, customTouchableStyles, handleOnPress }) => {

    return (
        <TouchableOpacity onPress={handleOnPress} style={`${customTouchableStyles}`}>
            <Text
                // style={`${styles.title} ${styles.customTextStyles}`}
                style={[styles.title, { ...customTextStyles }]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}

TouchableText.propTypes = {
    // props
    customTextStyles: PropTypes.shape({}),
    customTouchableStyles: PropTypes.shape({}),
    text: PropTypes.string.isRequired,
    // maxLength: PropTypes.number.isRequired,
    // methods
    handleOnPress: PropTypes.func.isRequired,
    // handTextFieldBlur: PropTypes.func,
};

TouchableText.defaultProps = {
    // handTextFieldBlur: null,
    customTextStyles: {},
    customTouchableStyles: {},
    // keyboardType: 'default',
    // textContentType: 'name'

}

export { TouchableText }