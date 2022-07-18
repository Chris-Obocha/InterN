import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import navigationTheme from './navigation/navigationTheme';
import { StyleSheet, Text, View, Dimensions, Animated, FlatList, Pressable } from 'react-native';
import Header from './components/Header';
import InfoNavigator from './navigation/InfoNavigator';
import DevCoach from './screens/DevCoach/DevCoach';
import InfoScreen from './screens/InfoScreen';
import AppNavigator from './navigation/AppNavigator';
import InfoFlatlistHeader from './components/InfoFlatlistHeader';


export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
     <AppNavigator />
      {/* <InfoFlatlistHeader /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});