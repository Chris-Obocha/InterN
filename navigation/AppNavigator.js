import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Button, Alert } from 'react-native';
import { firebase } from '../config/firebase';
import { useNavigation } from '@react-navigation/core';

import colors from "../config/colors";
import InfoNavigator from "./InfoNavigator";
import FAQScreen from "../screens/FAQScreen";
import HomeScreen from "../screens/HomeScreen";
import DeleteAccount from "../screens/DeleteAccount";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const auth = firebase.auth();

function LogOutComp() {
  const navigation = useNavigation();
  
  const handleSignOut = () => {
    try {
      auth.signOut();
    } catch (e) {
      alert(e)
    }
  }

  const logout = () => Alert.alert(
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
      <Button title={"Log Out"} onPress={logout} />
    </View>
  )
}



function  HomeDrawer() {
  return (
    <Drawer.Navigator 
      useLegacyImplementation={true}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 26,
        },
      }}
      >
      <Drawer.Screen name="Home" component={HomeScreen} options={{
        headerShown: true,  
        }}/>
      <Drawer.Screen name="Log Out" component={LogOutComp} />
      <Drawer.Screen name="Delete Account" component={DeleteAccount} />
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
