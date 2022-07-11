import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={30} />
      </View>
      <View style={styles.deleteIcon}>
      <MaterialCommunityIcons name="trash-can-outline" color={colors.white} size={30} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  deleteIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 30,
    right: 30,
  },
  closeIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.secondary,
    position: "absolute",
    top: 30,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
