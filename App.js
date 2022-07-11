import {
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton/AppButton";
import AppCard from "./app/components/AppCard/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetails.screen";
export default function App() {
  const dimensions = Dimensions.get("screen");
  console.log(dimensions);
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();
  const image = require("./app/assets/chair.jpg")
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <ViewImageScreen></ViewImageScreen>
      {/* <ListingDetailsScreen></ListingDetailsScreen> */}
      {/* <AppCard image={image}></AppCard> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      {/* <ViewImageScreen></ViewImageScreen> */}
      {/* <Heading>My heading</Heading> */}
      {/* <AppButton title={'Login'} onPress={()=> alert('login')}></AppButton> */}
      {/* <MaterialCommunityIcons name="email" size={200} color="dodgerblue" />
      <AppText>I love react native!</AppText>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Courier",
            fontStyle: "italic",
            fontWeight: "600",
            color: "tomato",
            textTransform: "capitalize",
            textDecorationLine: "underline line-through",
            textAlign: "center",
            lineHeight: 30,
          }}
        >
          I love React Native! this is my first react native app!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          shadowColor: "green",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 20,
          borderWidth: 10,
          borderColor: "yellow",
          borderRadius: 10,
          borderTopWidth: 20,
          borderTopLeftRadius: 50,
          padding: 20,
          paddingHorizontal: 10,
          paddingLeft: 30,
        }}
      >
        <View style={{ backgroundColor: "gold", width: 50, height: 50 }}></View>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          margin: 20,
        }}
      ></View> */}
    </SafeAreaView>
  );
}

const containerStyle = {
  //  backgroundColor: "green"
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
  },
});
