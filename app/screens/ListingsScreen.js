//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AppCard from "../components/AppCard/AppCard";
import Screen from "../components/Screen/Screen";
import colors from "../config/colors";

// create a component
const ListingsScreen = () => {
  const listings = [
    {
      id: 1,
      title: "red jacket for sale",
      price: 100,
      image: require("../assets/chair.jpg"),
    },
    {
      id: 2,
      title: "Couch in great condition",
      price: 100,
      image: require("../assets/chair.jpg"),
    },
  ];
  return (
    <Screen style={styles.screen}>
      <FlatList data={listings} 
      keyExtractor={listing => listing.id}
      renderItem={({item})=><AppCard title={item.title} subTitle={'$' + item.price} 
      image={item.image}
      />}
      />
    </Screen>
  );
};

// define your styles
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  },
});

//make this component available to the app
export default ListingsScreen;
