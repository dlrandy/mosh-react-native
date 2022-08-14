//import liraries
import React, { useContext, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";
import Icon from "../components/Icon/Icon";
import ListItem from "../components/ListItem/ListItem";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";

import Screen from "../components/Screen/Screen";
import colors from "../config/colors";
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
  {
    title: "My Listinges",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
];
// create a component
const AccountScreen = ({ navigation }) => {
  const {user, logOut} = useAuth();
  const handleLogout = async()=> await logOut();
  
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/chair.jpg')}
          ImageComponent={
            <Icon
              name="email"
              size={50}
              backgroundColor="red"
              iconColor="white"
            />
          }
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                onPress={()=> navigation.navigate(item.targetScreen)}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            );
          }}
        />
      </View>
      <ListItem
        title={"Log Out"}
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={handleLogout}
      />
    </Screen>
  );
};

// define your styles
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

//make this component available to the app
export default AccountScreen;
