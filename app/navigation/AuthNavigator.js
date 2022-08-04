//import liraries
import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen/Screen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Link = ({}) => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};
const Stack = createNativeStackNavigator();
const FeedNavigator = () => {
  //const AuthNavigator = ()
  const Tweets = ({ navigation }) => (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
      <Link />
    </Screen>
  );
  const TweetDetails = ({ route }) => (
    // useRoute
    <Screen>
      <Text>TweetDetails</Text>
    </Screen>
  );
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Tweets"
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          headerShown: true,
        }}
        component={Tweets}
      />
      <Stack.Screen
        name="TweetDetails"
        options={({ route }) => ({
          title: "TTWwweet details" + route.params?.id,
        })}
        component={TweetDetails}
      />
    </Stack.Navigator>
  );
}

  const Tab = createBottomTabNavigator();

  const AccountNavigator = () => (
    <Screen>
      <Text>AccountNavigator</Text>
    </Screen>
  );
  const Feed = () => (
    <Screen>
      <Text>Feed</Text>
    </Screen>
  );
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: "tomato",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarInactiveBackgroundColor: "#eee",
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          name="Feed"
          component={FeedNavigator}
        />
        <Tab.Screen name="Account" component={AccountNavigator} />
      </Tab.Navigator>
    );
  };
 
  // create a component
const AuthNavigator = ()=>{
  return (
   
       <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Welcome"
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          headerShown: true,
        }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="Login"
        options={({ route }) => ({
          title: "TTWwweet details" + route.params?.id,
        })}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        options={({ route }) => ({
          title: "TTWwweet details" + route.params?.id,
        })}
        component={RegisterScreen}
      />
    </Stack.Navigator>
 
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
export default AuthNavigator;
