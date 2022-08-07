import React from "react";
import { StyleSheet, Image, View, TouchableOpacity, Alert } from "react-native";
import * as Yup from "yup";
import { useNavigation } from '@react-navigation/core';
import LottieView from 'lottie-react-native';

import Screen from "../components/Screen";
import colors from "../config/colors";
import { firebase } from '../config/firebase';
import { AppForm, AppFormField, AppText, SubmitButton } from "../components/forms";

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
    } catch (e) {
      alert(e)
    }
  }

  return (
    <Screen style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView source={require('../assets/animation/login-animation.json')} autoPlay loop />
      </View>
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
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordScreen")}>
            <AppText style={styles.text}>Forgot Password?</AppText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
            <AppText style={styles.text}>Create account</AppText>
          </TouchableOpacity>
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontStyle: 'italic',
    color: colors.primary,
  },
});

export default LoginScreen;
