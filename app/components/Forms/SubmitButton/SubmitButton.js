//import liraries
import { useFormikContext } from 'formik';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../../AppButton/AppButton';

// create a component
const SubmitButton = ({title,}) => {
    const {handleSubmit,} = useFormikContext();
    return (
        <AppButton title={title} onPress={handleSubmit} />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SubmitButton;
