//import liraries
import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen/Screen";

import { AppFormField, SubmitButton, AppForm } from "../components/Forms";
import auth from "../../Backend/middleware/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

// create a component
const RegisterScreen = () => {
  const [error, setError] = useState(null);
  const handleSubmit = async (userInfo) => {
    const result = await usrApi.register(userInfo);
    if (!result.ok) {
      if (result.data) {
        setError(result.data.error)
      } else {
        setError('An unexpected error occurred.');
        
      }
    }
    const { data: authToken} = await authApi.login(userInfo.email, userInfo.password);
    auth.login(authToken);
  }
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <>
          <AppFormField
            icon="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email"
            name="email"
          />

          {/* {touched.email &&  <ErrorMessage error={errors.email} />} */}
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            name="password"
            secureTextEntry
          />
          {/* <ErrorMessage error={errors.password} visible={touched.password} /> */}
          <SubmitButton title={"Register"} />
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
export default RegisterScreen;
