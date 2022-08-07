import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Button } from "react-native";
import * as Yup from "yup";
import LottieView from 'lottie-react-native';

import { firebase } from '../config/firebase';
import Screen from "../components/Screen";
import colors from '../config/colors';
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";

import AppText from '../components/AppText';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const categories = [
  { label: "Princess Alexandra Hospital", value: 1 },
  { label: "East and North Hertfordshire NHS Trust", value: 2 },
  { label: "West Hertfordshire NHS Trust", value: 3 },
];

function RegisterScreen() {

  const navigation = useNavigation();
  const auth = firebase.auth();

  const handleSignUp = async (values) => {
    const db = firebase.firestore();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(values.email, values.password)
      const user = userCredential.user
    
      await db.collection("Users").doc(`${values.name}`).set({
                name: values.name,
                email: values.email,
                trust: values.trust,
              });
    } catch (e) {
      alert(e)
    }
  }

  return (
    <Screen style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView source={require('../assets/animation/register-animation.json')} autoPlay loop />
      </View>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => handleSignUp(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormPicker 
          items={categories}
          name='trust'
          placeholder='Trust of employment'
        />
        <SubmitButton title="Register" />
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <AppText style={styles.text}>Already got an account? Sign in</AppText>
          </TouchableOpacity>
        </View>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontStyle: 'italic',
    color: colors.primary,
  },
});

export default RegisterScreen;
