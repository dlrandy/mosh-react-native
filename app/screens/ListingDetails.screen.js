//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from '../components/ListItem/ListItem';
// create a component
const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.titile}>Red chair for sale</AppText>
        <AppText style={styles.price}>$1000</AppText>
        <View style={styles.userContainer}>

        <ListItem image={require("../assets/logo-red.png")} title="mosh" subTitle="7 listings"/>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  detailsContainer: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "500",
    fontSize: 20,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  userContainer:{
    marginVertical: 40,
  }
});

//make this component available to the app
export default ListingDetailsScreen;
