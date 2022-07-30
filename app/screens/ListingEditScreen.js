//import liraries
import React from "react";
import { StyleSheet, Image } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen/Screen";
import CategoryPickerItemComponent from '../components/CategoryPickerItem/CategoryPickerItem';
import { AppFormField, SubmitButton, AppForm, AppFormPicker } from "../components/Forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "furniture", value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: "clothing", value: 2 , backgroundColor: 'green', icon: 'email'},
  { label: "camera", value: 3 , backgroundColor: 'blue', icon: 'lock'},
];

// create a component
const ListingEditScreen = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
      >
        <>
          <AppFormField maxLength={255} name="title" placeholder="Title" />

          <AppFormField
            keyboardType="numeric"
            maxLength={8}
            width={120}
            name="price"
            placeholder="Price"
          />
          
          <AppFormPicker
            items={categories}
            name="category"
            width="50%"
            numColumns={3}
            placeholder="Category"
            PickerItemComponent={CategoryPickerItemComponent}
          />
          
          <AppFormField
          multiline
          numberOfLines={3}
            maxLength={255}
            name="description"
            placeholder="Description"
          />
          <SubmitButton title={"Login"} />
        </>
      </AppForm>
    </Screen>
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
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

//make this component available to the app
export default ListingEditScreen;
