import React from "react";
import { Text, View } from "react-native";
import styles from './styles';
function AppText({ children, style }) {
  return (
    <View>
      <Text style={[styles.text,style]}>{children}</Text>
    </View>
  );
}

export default AppText;
