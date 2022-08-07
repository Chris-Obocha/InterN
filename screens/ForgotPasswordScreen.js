import React from 'react';
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { useNavigation } from '@react-navigation/core';
import LottieView from 'lottie-react-native';

import { AppForm, AppFormField, AppText, SubmitButton } from "../components/forms";
import { firebase } from '../config/firebase';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

const auth = firebase.auth();

function ForgotPasswordScreen(props) {
  const navigation = useNavigation();
  
  const handleForgotPassword = async (values) => {
    try {
      await auth.sendPasswordResetEmail(values.email);
      navigation.navigate('Onboarding')
    }
    catch(e) {
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
        onSubmit={(values) => handleForgotPassword(values)}
        validationSchema={validationSchema}
      >
        <AppText>Enter your email address and we'll send you a link to reset your password</AppText>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <SubmitButton title="Submit" />
      </AppForm>
    </Screen>
  );
}

export default ForgotPasswordScreen;

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
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
