//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import AppText from '../AppText/AppText';
import Icon from '../Icon/Icon';

// create a component
const CategoryPickerItem = ({ onPress, item,}) => {
    return (
        <TouchableWithoutFeedback onPress={()=>onPress()}>
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={70} />
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
        </TouchableWithoutFeedback>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 28,
        paddingVertical: 15,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '33.33%',
        backgroundColor: '#2c3e50',
    },
    label:{
        marginTop: 10,
        textAlign: 'center',
    },
});

//make this component available to the app
export default CategoryPickerItem;
