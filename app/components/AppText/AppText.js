import React from "react";
import { Text, View } from "react-native";
import defaultStyles from '../../config/styles';
function AppText({ children, style, ...otherProps }) {
  return (
    <View style={style}>
      <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
    </View>
  );
}

export default AppText;
