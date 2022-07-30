//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// create a component
const Icon = ({name, size = 40, backgroundColor = '#000', iconColor='#fff'}) => {
    return (
        <View style={{
            width: size, 
            height: size, 
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
             <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}/>
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
});

//make this component available to the app
export default Icon;
