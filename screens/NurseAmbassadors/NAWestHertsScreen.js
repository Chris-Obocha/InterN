import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

import InfoHeader from '../../components/InfoHeader';
import ContactButton from '../../components/Buttons/ContactButton';
import NAText from '../../components/NAText';

export default function NAWestHertsScreen() {
  return (
    <ScrollView>
      <InfoHeader title='Anne Jose' text='Nurse Ambassador @WestHertfordshireNHSTrust' imageSrc={require('../../assets/ann-jose.jpg')}/>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>{NAText.wh1}</Text>
      <Text style={styles.text}>{NAText.wh2}</Text>
      <Text style={styles.text}>{NAText.wh3}</Text>
      <View>
        <ContactButton title='email' url='mailto:ann.jose@nhs.net' text='ann.jose@nhs.net' />
        <ContactButton title='Phone Number' url='tel:01923244366' text='01923244366' />
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