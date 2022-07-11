//import liraries
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import AppText from "../AppText/AppText";
import styles from "./styles";

// create a component
const AppCard = ({
  title = "Red jacket for sale",
  subTitle = "$100",
  image,
}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default AppCard;
