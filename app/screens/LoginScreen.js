//import liraries
import React, { useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen/Screen";

import { AppFormField, SubmitButton, AppForm, ErrorMessage } from "../components/Forms";
import authApi from '../api/auth';
import AuthContext from "../auth/context";
import authStorage from '../auth/storage';
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

// create a component
const LoginScreen = () => {
  const authContext = useContext(AuthContext);
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({email, password}) =>{
    const result = await authApi.login(email, password);
    console.log(result,'--')
    if (!result.ok) {
      return setLoginFailed(true);
    }
     setLoginFailed(false);
     auth.login(result.data);
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
        <ErrorMessage error="Invalid email and/or password." visible={loginFailed} />
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
export default LoginScreen;
