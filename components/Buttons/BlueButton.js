import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import colors from '../../config/colors';
export default function BlueButton({title, onPress, style}) {
  const navigation = useNavigation();
   
  return (
    <View style={[styles.btnContainer, style]}>
      <TouchableOpacity 
        title={title}
        onPress={() => navigation.navigate(`${onPress}`)}>
        <Text style={styles.btnTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  btnContainer:{
    marginVertical: 5, 
    paddingVertical: 15,
    width: 343,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  btnTitle: {
    color: colors.white,
    fontSize: 23,
    fontWeight: '500'
  },
  btnText: {
    color: colors.darkgray,
  },
});