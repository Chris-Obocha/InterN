import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import * as Linking from 'expo-linking';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../config/colors';
import AppText from '../AppText';


const MyButton = ({ title }) => {
  if (title==='email') return (
    <View style={styles.iconContainer}>
      <Icon name='email-edit-outline' color={colors.darkgray} size={30}/>
    </View>
  );
  else return (
    <View style={styles.iconContainer}>
      <Icon name='phone-outgoing' color={colors.darkgray} size={30}/>
    </View>
  );
};

export default function ContactButton({title, text, url }) {

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => Linking.openURL(`${url}`).catch()} >
      <View style={styles.textBody}>
        <AppText style={styles.btnTitle}>{title}</AppText>
        <AppText style={styles.btnText}>{text}</AppText>
      </View>
      <MyButton title={title} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btnContainer:{
    marginVertical: 5, 
    paddingVertical: 15,
    width: 353,
    backgroundColor: colors.lightblue,
    alignSelf: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btnTitle: {
    color: colors.dark,
    fontSize: 23,
    fontWeight: '500',
    marginLeft: 20,
  },
  btnText: {
    color: colors.darkgray,
    marginLeft: 20,
  },
  iconContainer: {
    flex: .5,
  },
  textBody: {
    flex: 3.5,
  },

});