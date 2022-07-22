import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import Onboarding from "../screens/Onboarding";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}/>
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default AuthNavigator;