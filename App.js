import {
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  View,
  SafeAreaView,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
export default function App() {
  const dimensions = Dimensions.get("screen");
  console.log(dimensions);
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {/* <WelcomeScreen></WelcomeScreen> */}
      <ViewImageScreen></ViewImageScreen>
    </SafeAreaView>
  );
}

const containerStyle = {
  //  backgroundColor: "green" 
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // // backgroundColor: "purple",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    flexDirection:"column",
    // alignItems: "center",
    // alignContent: 'center',
    // flexWrap:'wrap'
  },
});
