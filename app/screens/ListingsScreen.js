//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import * as Notifications from 'expo-notifications';
import AppCard from "../components/AppCard/AppCard";
import Screen from "../components/Screen/Screen";
import colors from "../config/colors";
import routes from '../navigation/routes';
import { getListings } from '../api/listings';
import AppText from "../components/AppText/AppText";
import AppButton from '../components/AppButton/AppButton';
import ActivityIndicator from '../components/ActivityIndicator/ActivityIndicator';
import useApi from '../hooks/useApi';
// create a component
const ListingsScreen = ({navigation}) => {
  const {
    request: loadListings,
    data: listings, 
    error,
    loading,
  } = useApi(getListings);
  useEffect(()=>{
    loadListings();
 }, []);
 const showNotification = () => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Time's up!",
      body: 'Change sides!',
    },
    trigger: {
      seconds: 10,
    },  });

 }
  return (
    <>
      <ActivityIndicator visible={loading} />
    <Screen style={styles.screen}>
      {
        error &&<>
        <AppText>Couldn't retrieve the listings.</AppText>
        <AppButton title="Retry" onPress={loadListings}></AppButton>
        </>
      }
      <Button title="Tap me" onPress={showNotification} />
      <FlatList data={listings} 
      keyExtractor={listing => listing.id}
      renderItem={({item})=><AppCard onPress={()=> navigation.navigate(routes.LISTING_DETAILS,item)} title={item.title} subTitle={'$' + item.price} 
      imageUrl={item.images[0].url}
      thumbnailUrl={item.images[0].thumbnailUrl}
      />}
      />
    </Screen>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  },
});

//make this component available to the app
export default ListingsScreen;
