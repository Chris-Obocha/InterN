import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import InfoScreen from "../screens/InfoScreen";
import DevCoach from "../screens/DevCoach/DevCoach";
import DCpah from "../screens/DevCoach/DCpah";
import DCWestHertsScreen from "../screens/DevCoach/DCWestHertsScreen";
import DCEastHertsScreen from "../screens/DevCoach/DCEastHertsScreen";

import NAScreen from "../screens/NurseAmbassadors/NAScreen";
import NApahScreen from "../screens/NurseAmbassadors/NApahScreen";
import NAWestHertsScreen from "../screens/NurseAmbassadors/NAWestHertsScreen";
import NAEastHertsScreen from "../screens/NurseAmbassadors/NAEastHertsScreen";
import InfoFlatlistHeader from "../components/InfoFlatlistHeader";

const Stack = createStackNavigator();

const InfoNavigator = () => (
  <Stack.Navigator initialRouteName="InfoScreen">
    <Stack.Screen name="InfoScreen" component={InfoScreen} options={{headerShown: false}}/>
    <Stack.Screen name="DevCoach" component={DevCoach} options={{headerShown: false}}/>
    <Stack.Screen name="DCpah" component={DCpah} options={{headerShown: false}}/>
    <Stack.Screen name="DCWestHerts" component={DCWestHertsScreen} options={{headerShown: false}}/>
    <Stack.Screen name="DCEastHerts" component={DCEastHertsScreen} options={{headerShown: false}}/>
    <Stack.Screen name="NAScreen" component={NAScreen} options={{headerShown: false}}/>
    <Stack.Screen name="NApah" component={NApahScreen} options={{headerShown: false}}/>
    <Stack.Screen name="NAWestHerts" component={NAWestHertsScreen} options={{headerShown: false}}/>
    <Stack.Screen name="NAEastHerts" component={NAEastHertsScreen} options={{headerShown: false}}/>
</Stack.Navigator>
);

export default InfoNavigator;