import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

import InfoHeader from '../../components/InfoHeader';
import devCoachText from '../../components/devCoachText';
import BlueButton from '../../components/Buttons/BlueButton';
import ContactButton from '../../components/Buttons/ContactButton';

export default function DCEastHertsScreen() {
  return (
    <ScrollView>
      <InfoHeader title='Linda Whiteley' text='Development Coach' imageSrc={require('../../assets/linda.jpg')}/>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>{devCoachText.lindaP1}</Text>
      <Text style={styles.text}>{devCoachText.lindaP2}</Text>
      <Text style={styles.text}>{devCoachText.lindaP3}</Text>
      <View>
        <ContactButton title='email' url='mailto:linda.whiteley1@nhs.net' text='linda.whiteley1@nhs.net' />
        <ContactButton title='Phone Number' url='tel:07903949908' text='07812785184 ' />
        <BlueButton style={styles.bottomButton} title='Coaching Resources' onPress={() => Linking.openURL('https://england.nhs.uk/nursingmidwifery')}/>
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