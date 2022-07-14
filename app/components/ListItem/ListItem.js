//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from "../../config/colors";
import AppText from "../AppText/AppText";

// create a component
const ListItem = ({ title, subTitle, image, IconComponent, onPress,  renderRightActions}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight onPress={onPress} underlayColor={colors.white}>
      <View style={styles.container}>
        {IconComponent}
        { image && <Image style={styles.image} source={image} /> }
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
    </Swipeable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    padding: 20,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    // marginRight: 10,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: "600",
  },
  subTitle: {
    fontWeight: "400",
    color: colors.medium,
  },
});

//make this component available to the app
export default ListItem;
