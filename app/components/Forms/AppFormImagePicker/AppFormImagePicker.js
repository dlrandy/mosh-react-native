//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageInputList from "../../ImageInputList/ImageInputList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useFormikContext } from "formik";

// create a component
const FormImagePicker = ({ name }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const imageUris = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(name,  imageUris.filter((imageUri)=> imageUri !== uri));;
  };
  return (
    <>
      <ImageInputList
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
        imageUris={imageUris}
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
export default FormImagePicker;
