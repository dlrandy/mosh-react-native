//import liraries
import React, { Component, useEffect } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen/Screen";
 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

 
import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import useNotification from "../hooks/useNotification";
import rootNavigation from "./rootNavigation";
console.log(useNotification,'--');



const Tab = createBottomTabNavigator();

const AccountScreen = () => (
  <Screen>
    <Text>AccountScreen</Text>
  </Screen>
);
 
// create a component
const AppNavigator = () => {

  useNotification(navigation =>{
    rootNavigation.navigate('Account')
  });
  return (
    <Tab.Navigator
      
    >
      <Tab.Screen
        options={{
          tabBarIcon:({color, size})=>{
            return <MaterialCommunityIcons name="home" color={color} size={size} />
          },
        }}
        name="Feed"
        component={FeedNavigator}
      />
      <Tab.Screen options={({navigation, route})=>({
         tabBarButton:()=><NewListingButton onPress={()=>navigation.navigate('ListingEdit')} />,
          tabBarIcon:({color, size})=>{
            return <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          },
        })} name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen  options={{
          tabBarIcon:({color, size})=>{
            return <MaterialCommunityIcons name="account" color={color} size={size} />
          },
        }} name="Account" component={AccountNavigator} />
    </Tab.Navigator>
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
});

//make this component available to the app
export default AppNavigator;
