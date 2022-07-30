//import liraries
import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";
import Constants from 'expo-constants';
 
// create a component
const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style,  ]}>
      <View style={[styles.view,style,  ]}>
      {children}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  screen:{
    // paddingTop:  Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingTop:  Constants.statusBarHeight,
    flex: 1,
  },
  view:{
    flex: 1,
  },
});

//make this component available to the app
export default Screen;
