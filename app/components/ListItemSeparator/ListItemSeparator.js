//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

// create a component
const ListItemSeparator = () => {
    return (
        <View style={styles.separator}></View>
    );
};

// define your styles
const styles = StyleSheet.create({
    separator: {width: '100%', height:1,backgroundColor: colors.light},
});

//make this component available to the app
export default ListItemSeparator;
