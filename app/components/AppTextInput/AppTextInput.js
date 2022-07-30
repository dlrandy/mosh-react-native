//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from '../../config/styles';
// create a component
const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} style={styles.icon} color={defaultStyles.colors.medium} />
      )}
      <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} {...otherProps} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 25,
    width: "100%",
    backgroundColor: defaultStyles.colors.light,
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    color: defaultStyles.colors.dark,
    width: '100%',
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  icon:{
    marginRight:10,
  },
});

//make this component available to the app
export default AppTextInput;
