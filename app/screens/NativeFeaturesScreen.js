//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import AppCard from "../components/AppCard/AppCard";
import Screen from "../components/Screen/Screen";
import colors from "../config/colors";
import ImageInput from "../components/ImageInput/ImageInput";
import ImageInputList from "../components/ImageInputList/ImageInputList";

// create a component
const NativeFeaturesScreen = () => {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    console.log(imageUris, uri, "--");
    setImageUris((uris) => [...uris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris((uris) => uris.filter((ui) => ui !== uri));
  };

  return (
    <Screen style={styles.screen}>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
};

// define your styles
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

//make this component available to the app
export default NativeFeaturesScreen;
