//import liraries
import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen/Screen";
import ErrorMessage from '../components/Forms/ErrorMessage/ErrorMessage';
import { AppFormField, SubmitButton, AppForm } from "../components/Forms";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator/ActivityIndicator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

// create a component
const RegisterScreen = () => {
  const [error, setError] = useState(null);
 const auth = useAuth();
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const handleSubmit = async (userInfo) => {

    const result = await registerApi.request(userInfo);
    console.log(result)
    if (!result.ok) {
      if (result.data) {
        setError(result.data.error)
      } else {
        setError('An unexpected error occurred.');
        
      }
      return ;
    }
    try {
      const res = await loginApi.request(userInfo.email, userInfo.password);
      console.log(res,'--');
      auth.login(res.data);
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <Screen>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <ErrorMessage error={error} visible={!!error} /> 
      <AppForm
        validationSchema={validationSchema}
        initialValues={{ name: "",email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <>
          <AppFormField
            icon="account"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Name"
            name="name"
          />
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
