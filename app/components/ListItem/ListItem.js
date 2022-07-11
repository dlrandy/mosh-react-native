//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";

// create a component
const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "600",
  },
  subTitle: {
    fontWeight: "400",
    color: colors.medium,
  },
});

//make this component available to the app
export default ListItem;
