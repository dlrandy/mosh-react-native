//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


// create a component
const ActivityIndicator = ({visible = false, }) => {
    if (!visible) {
        return null;
    }
    return (
       <LottieView 
        autoPlay
        loop
        source={require('../../assets/animations/loader.json')} />
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
export default ActivityIndicator;
