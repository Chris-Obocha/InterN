import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";
import InfoScreen from "../screens/InfoScreen";
import DevCoach from "../screens/DevCoach/DevCoach";
import DCpah from "../screens/DevCoach/DCpah";
import DCWestHertsScreen from "../screens/DevCoach/DCWestHertsScreen";
import DCEastHertsScreen from "../screens/DevCoach/DCEastHertsScreen";

import NAScreen from "../screens/NurseAmbassadors/NAScreen";
import NApahScreen from "../screens/NurseAmbassadors/NApahScreen";
import NAWestHertsScreen from "../screens/NurseAmbassadors/NAWestHertsScreen";
import NAEastHertsScreen from "../screens/NurseAmbassadors/NAEastHertsScreen";

import IRTScreen from "../screens/IRTScreen";

const Stack = createStackNavigator();

const InfoNavigator = () => (
  <Stack.Navigator 
    initialRouteName="InfoScreen"
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24,
      },
    }}>
    <Stack.Screen name="InfoScreen" component={InfoScreen} options={{title: 'Info'}}/>
    <Stack.Screen name="DevCoach" component={DevCoach} options={{title: 'Development Coaches'}}/>
    <Stack.Screen name="DCpah" component={DCpah} options={{headerShown: false}}/>
    <Stack.Screen name="DCWestHerts" component={DCWestHertsScreen} options={{headerShown: false}}/>
    <Stack.Screen name="DCEastHerts" component={DCEastHertsScreen} options={{headerShown: false}}/>
    <Stack.Screen name="NAScreen" component={NAScreen} options={{title: 'Nurse Ambassadors'}}/>
    <Stack.Screen name="NApah" component={NApahScreen} options={{headerShown: false}}/>
    <Stack.Screen name="NAWestHerts" component={NAWestHertsScreen} options={{headerShown: false}}/>
    <Stack.Screen name="NAEastHerts" component={NAEastHertsScreen} options={{headerShown: false}}/>
    <Stack.Screen name="IRTScreen" component={IRTScreen} options={{ title: 'International Recruitment' }}/>
  </Stack.Navigator>
);

export default InfoNavigator;