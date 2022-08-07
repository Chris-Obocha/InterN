import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import colors from '../../config/colors';
import AppText from '../AppText';
export default function DownloadBlueButton({title, onPress, style}) {
  const navigation = useNavigation();
   
  return (
    <View style={[styles.btnContainer, style]}>
      <TouchableOpacity 
        title={title}
        onPress={onPress}>
        <AppText style={styles.btnTitle}>{title}</AppText>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  btnContainer:{
    marginVertical: 5, 
    paddingVertical: 15,
    width: 363,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  btnTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500'
  },
  btnText: {
    color: colors.darkgray,
  },
});