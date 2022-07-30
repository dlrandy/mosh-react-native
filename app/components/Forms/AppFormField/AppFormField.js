//import liraries
import { useFormikContext } from "formik";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


import AppTextInput from "../../AppTextInput/AppTextInput";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


// create a component
const AppFormField = ({name, ...otherProps}) => {
   const {setFieldTouched, handleChange, errors, touched} =  useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
         {...otherProps}
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
export default AppFormField;
