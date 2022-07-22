import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Button } from "react-native";
import * as Yup from "yup";

import { firebase } from '../config/firebase';
import Screen from "../components/Screen";
import AppPicker from '../components/AppPicker';
import DatePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";

import AppText from '../components/AppText';

import AppButton from '../components/AppButton';

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

  const [date, setDate] = useState(new Date());

  const [category, setCategory] = useState(categories[0]);

  const navigation = useNavigation();

  const auth = firebase.auth();

  const handleSignUp = async (values) => {
    const db = firebase.firestore();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(values.email, values.password)
      const user = userCredential.user
    
      await db.collection("data").doc(`${values.name}`).set({
                name: values.name,
                email: values.email,
                trust: values.trust.label,
                date: date,
              });
    } catch (e) {
      alert(e)
    }
  }

  return (
    <Screen style={styles.container}>
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
        {/* <View style={styles.dateContainer}>
          <DatePicker
            style={styles.datePickerStyle}
            date={date} //initial date from state
            mode="date" //The enum of date, datetime and time
            
            placeholder="Select date of arrival to the UK"
            format="DD-MM-YYYY"
            minDate="01-01-2006"
            maxDate="01-01-2040"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                // display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
            // value={date}
            />
        </View> */}

        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
