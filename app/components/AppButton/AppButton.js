//import liraries
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import colors from '../../config/colors';
// create a component
const AppButton = ({ title, onPress, color = 'primary', }) => {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
