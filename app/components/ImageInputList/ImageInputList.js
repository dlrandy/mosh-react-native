//import liraries
import React, { Component, useRef } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImageInput from "../ImageInput/ImageInput";
// create a component
const ImageInputList = ({ imageUris, onRemoveImage, onAddImage }) => {
  const scrollViewRef = useRef();

  return (
    <View>
    <ScrollView
      style={{
        backgroundColor: "yellow",
      }}
      horizontal={true}
      ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <View style={styles.image} key={uri}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </View>
    </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "start",
    height: 100,
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  image: {
    marginRight: 10,
  },
});

//make this component available to the app
export default ImageInputList;
