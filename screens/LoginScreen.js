import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import { useNavigation } from '@react-navigation/core';

import Screen from "../components/Screen";
import { firebase } from '../config/firebase';
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const auth = firebase.auth();

function LoginScreen(props) {

  const navigation = useNavigation();

  const handleLogin = async (values) => {
    const db = firebase.firestore();

    try {
      const userCredential = await auth.signInWithEmailAndPassword(values.email, values.password)
      const user = userCredential.user

      // const user = userCredential.user
      
      // await db.collection("data").doc(`${values.name}`).set({
        //           name: values.name,
        //           email: values.email,
        //           trust: values.trust.label,
        //           date: date,
        //         });

      // const userCredential = await auth.sendPasswordResetEmail(user.email)
      // navigation.replace('Hub')
      console.log('Logged2 In with:', user.email);
    } catch (e) {
      alert(e)
    }
  }

  return (
    <Screen style={styles.container}>
      {/* <Image style={styles.logo} source={require("../assets/logo-red.png")} /> */}

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
