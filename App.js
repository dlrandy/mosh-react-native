
import { useCallback, useRef } from 'react';
import {
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,

  SafeAreaView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from './app/navigation/navigationTheme';
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import * as SplashScreen from 'expo-splash-screen';

import { useEffect, useState } from "react";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from './app/auth/storage';
import {navigationRef} from './app/navigation/rootNavigation';
import logger from './app/utility/logger';
logger.start();
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

SplashScreen.preventAutoHideAsync();
export default function App() {

  const dimensions = Dimensions.get("screen");
  console.log(dimensions);
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();
  const image = require("./app/assets/chair.jpg");

  const [category, setCategory] = useState(categories[0]);

  // NetInfo.fetch().then(netInfo => console.log(netInfo));
  // useEffect(()=>{
  // const unlisten = NetInfo.addEventListener(netInfo=>console.log(netInfo))
  // return ()=>unlisten();
  // }, []);
  // const netInfo = useNetInfo();
  // return netInfo.isInternetReachable ? <View><Text>Noraml</Text></View> : <View><Text>abnormal</Text></View>
  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);
  const restoreUser = async () => {
    try {
      const user = await  authStorage.getUser();
      if (!user) {
        return;
      }
      setUser(user);      
    } catch (error) {
      console.log(error);
    } finally{
      setAppIsReady(true);
    }

  }
  useEffect(()=>{
    restoreUser();
  },[]);
 
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
 

  return (
    <SafeAreaView style={[styles.container, containerStyle]} >
      <AuthContext.Provider value={{setUser,user}}>
      <NavigationContainer ref={navigationRef} onReady={onLayoutRootView} theme={navigationTheme}>
       {user ? <AppNavigator /> : <AuthNavigator />}
      <OfflineNotice />

      </NavigationContainer>
      {/* <StackNavigatorScreen /> */}
      {/* <NativeFeaturesScreen></NativeFeaturesScreen> */}
      {/* <ListingEditScreen /> */}
      {/* <LoginScreen /> */}
      {/* <AppPicker selectedItem={category} onSelectItem={item=> setCategory(item)} items={categories} icon={"apps"} placeholder={"Category"} />
       <AppTextInput icon="email" placeholder="Email"/> */}
      {/* <AppSwitch value={false} handleValueChange={(v)=>alert(v)} /> */}
      {/* <AppTextInput placeholder="user name" icon="email" /> */}
      {/* <ListingsScreen /> */}
      {/* <AccountScreen></AccountScreen> */}
      {/* <MessagesScreen></MessagesScreen> */}
      {/* <ViewImageScreen></ViewImageScreen> */}
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
      </AuthContext.Provider>
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
