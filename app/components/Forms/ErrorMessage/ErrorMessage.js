//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppText from '../../AppText/AppText';

// create a component
const  ErrorMessage = ({error, visible}) => {
    if (!visible || !error) {
        return null;
    }
    return (
       <AppText style={styles.error}>{error}</AppText>
    );
};

// define your styles
const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
});

//make this component available to the app
export default  ErrorMessage;
