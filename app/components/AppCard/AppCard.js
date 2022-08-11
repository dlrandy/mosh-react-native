//import liraries
import React from "react";
import {  TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import AppText from "../AppText/AppText";
import styles from "./styles";
import {Image} from "react-native-expo-image-cache";

// create a component
const AppCard = ({
  title = "Red jacket for sale",
  subTitle = "$100",
  imageUrl,
  thumbnailUrl,
  onPress
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
    <View style={styles.card}>
      <Image style={styles.image} tint="light" preview={{uri:thumbnailUrl}} uri={imageUrl} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default AppCard;
