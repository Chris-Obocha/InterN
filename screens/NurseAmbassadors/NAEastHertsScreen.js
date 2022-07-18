import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

import InfoHeader from '../../components/InfoHeader';
import devCoachText from '../../components/devCoachText';
import NAText from '../../components/NAText';
import BlueButton from '../../components/Buttons/BlueButton';
import ContactButton from '../../components/Buttons/ContactButton';

export default function NAEastHertsScreen() {
  return (
    <ScrollView>
      <InfoHeader title='Jaimol Anilkumar' text='Nurse Ambassador' imageSrc={require('../../assets/jaimol.png')}/>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>{NAText.enh1}</Text>
      <Text style={styles.text}>{NAText.enh2}</Text>
      <Text style={styles.text}>{NAText.enh3}</Text>
      <View>
        <ContactButton title='email' url='mailto:jaimol.anilkumar@nhs.net' text='jaimol.anilkumar@nhs.net' />
        <ContactButton title='Phone Number' url='tel:07903949908' text='07812785184 ' />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bottomButton: {
    marginTop: 25,
  },
  btnContainer: {
    width: 353,
    alignSelf: 'center',
  },
  text: {
    margin: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  heading: {
    margin: 5,
    marginBottom: -10,
    fontSize: 26,
    fontWeight: '600',
    alignSelf: 'center',
  }
});