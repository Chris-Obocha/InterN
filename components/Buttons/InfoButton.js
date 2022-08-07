import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Pressable } from 'react-native';
import * as Linking from 'expo-linking';
import { useNavigation } from '@react-navigation/native';

import colors from '../../config/colors';

export default function InfoButton({title, text, route }) {

  const navigation = useNavigation();

  return (
    <Pressable 
      style={styles.btnContainer} 
      onPress={() => navigation.navigate(route)} >
      <View style={styles.textBody}>
        <Text style={styles.btnTitle}>{title}</Text>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </Pressable>
  );
}
 
const styles = StyleSheet.create({
  btnContainer:{
    marginVertical: 5, 
    paddingVertical: 15,
    width: 343,
    backgroundColor: colors.lightblue,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  btnTitle: {
    color: colors.dark,
    fontSize: 23,
    fontWeight: '500'
  },
  btnText: {
    color: colors.darkgray,
    textAlign: 'center',
  },
});