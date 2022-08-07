import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import navigationTheme from './navigation/navigationTheme';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Header from './components/Header';
import InfoNavigator from './navigation/InfoNavigator';
import DevCoach from './screens/DevCoach/DevCoach';
import InfoScreen from './screens/InfoScreen';
import AppNavigator from './navigation/AppNavigator';
import InfoFlatlistHeader from './components/InfoFlatlistHeader';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Screen from './components/Screen';

import { Button } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';
import { AppFormField } from './components/forms';
import Onboarding from './screens/Onboarding';
import AuthNavigator from './navigation/AuthNavigator';
import { firebase } from './config/firebase';
import Splash from './screens/Splash';


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <NavigationContainer theme={navigationTheme}>
      { isLoggedIn ? 
      <AppNavigator />
      :
      <AuthNavigator /> }
    </NavigationContainer>
  );
}