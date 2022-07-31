//import liraries
import React, { useEffect } from "react";
import { Alert, View, Text, StyleSheet, Image } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import * as ImagePicker from "expo-image-picker";
// create a component
const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    async function requestPermission() {
      //  const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.LOCATION_BACKGROUND);
      //  result.granted
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if (!granted) {
        alert("You need to enable permission to access the library!");
      }
    }

    requestPermission();
  }, []);
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else
      Alert.alert("Delete", "Are you sure to delete to this image? ", [
        {
          text: "Yes",
          onPress: () => {
            onChangeImage(imageUri);
          },
        },
        {
          text: "No",
        },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Errro reading an image");
    }
  };
  console.log(imageUri,'======');
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons name="camera" color={colors.medium} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

//make this component available to the app
export default ImageInput;
