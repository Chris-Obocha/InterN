import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Button, Alert } from 'react-native';
import { firebase } from '../config/firebase';
import { useNavigation } from '@react-navigation/core';

import InfoNavigator from "./InfoNavigator";
import FAQScreen from "../screens/FAQScreen";
import HomeScreen from "../screens/HomeScreen";
import AuthNavigator from "./AuthNavigator";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const auth = firebase.auth();

function TwoButtonAlert() {
  
  const navigation = useNavigation();
  const handleSignOut = () => {
    
    try {
      auth.signOut();
      console.log('LoggedOut In with: ');
    } catch (e) {
      alert(e)
    }
  }

  const twoButtonA = () => Alert.alert(
    "Log Out",
    "Are you sure you want to log out?",
    [
      {
        text: "Cancel",
        onPress: () => navigation.goBack,
        style: "cancel"
      },
      { text: "OK", onPress: () => handleSignOut() }
    ]
  );

  return (
    <View style={styles.container}>
      <Button title={"Log Out"} onPress={twoButtonA} />
    </View>
  )
}

function  HomeDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Drawer.Screen name="Log Out" component={TwoButtonAlert} />
    </Drawer.Navigator>
  );
}

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Hub"
      component={HomeDrawer}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name="Info"
      component={InfoNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bag-checked" color={color} size={size} />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name="FAQs"
      component={FAQScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="help" color={color} size={size} />
        ),
        headerShown: false
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});
