//import liraries
import { useFormikContext } from "formik";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppPicker from "../../AppPicker/AppPicker";


import AppTextInput from "../../AppTextInput/AppTextInput";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


// create a component
const AppFormPicker = ({items, name, placeholder}) => {
   const {values, setFieldValue, errors, touched} =  useFormikContext();
  return (
    <>
      <AppPicker 
       items={items}
       onSelectItem={item => setFieldValue(name, item)}
       placeholder={placeholder}
       selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
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
export default AppFormPicker;
