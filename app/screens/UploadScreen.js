//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import ProgressBar from "react-native-progress/Bar";

import colors from "../config/colors";
import LottieAnimation from "../components/LottieAnimation/LottieAnimation";
// create a component
const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <ProgressBar color={colors.primary} progress={progress} />
        ) : (
            <LottieAnimation
            style={styles.animation}
            loop={false}
            
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  animation: {
    width: 150,
  },
});

//make this component available to the app
export default UploadScreen;
