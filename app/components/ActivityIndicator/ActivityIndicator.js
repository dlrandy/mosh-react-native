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
        <View style={styles.overlay}>
       <LottieView 
        autoPlay
        loop
        source={require('../../assets/animations/loader.json')} />
        </View>
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
    overlay:{
        backgroundColor: 'black',
        height: '100%',
        opacity: 0.7,
        position: 'absolute',
        width: '100%',
        zIndex: 1
    },
});

//make this component available to the app
export default ActivityIndicator;
