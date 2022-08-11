//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText/AppText';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';
// create a component
const OfflineNotice = () => {
    const netInfo = useNetInfo();
    if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>NO Internet Connection!</AppText>
            </View>
        );
    }
    return null;

};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width:'100%',
        top: Constants.statusBarHeight,
        zIndex:1,
        position:'absolute',
        backgroundColor: colors.primary,
    },
    text:{
        color: colors.white,
    }
});

//make this component available to the app
export default OfflineNotice;
