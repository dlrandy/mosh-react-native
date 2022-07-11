import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"} onPress={() => alert("Login")}></AppButton>
        <View style={styles.registerButton}>
          <AppButton
            title={"Register"}
            color={"secondary"}
            onPress={() => alert("Register")}
          ></AppButton>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  tagLine:{
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 100,
  },
  registerButton: {
    // width: "100%",
    // height: 70,
    // backgroundColor: "#4ecdc4",
    marginVertical: 10,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
export default WelcomeScreen;
