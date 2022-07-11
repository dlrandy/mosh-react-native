import React from "react";
import { Text, View, StyleSheet } from "react-native";
function AppText({children}) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
      <Text style={styles.text}>in IOS</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      fontFamily: 'Avenir',
    },
})

export default AppText;
