import React from "react";
import { Text, View, StyleSheet } from "react-native";
function AppText({children}) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
      <Text style={styles.text}>in Android</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    text: {
      fontSize: 18,
        fontSize: 'Roboto',
    },
})

export default AppText;
