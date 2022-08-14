import React, { Component, useEffect } from "react";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import expoPushTokens from "../api/expoPushTokens";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: true,
    }),
  })

const useNotification = (notificationListener)=>{

  const registerForPushNotificationsAsync = async () => {
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      // this.setState({ expoPushToken: token });
      await expoPushTokens.register(token);

    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    };
  useEffect(()=>{
    registerForPushNotificationsAsync();
    if(notificationListener){
        Notifications.addNotificationReceivedListener(notificationListener)
    }
  },[]);
};

export default useNotification;