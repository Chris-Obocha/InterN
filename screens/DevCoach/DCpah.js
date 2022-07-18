import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native';
import * as Linking from 'expo-linking';

import InfoHeader from '../../components/InfoHeader';
import devCoachText from '../../components/devCoachText';
import BlueButton from '../../components/Buttons/BlueButton';
import ContactButton from '../../components/Buttons/ContactButton';

export default function DCpah(props) {
  return (
    <ScrollView>
      <InfoHeader title='Priscillah Osikominu' text='Development Coach' imageSrc={require('../../assets/priscillah1.jpg')}/>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>{devCoachText.priscillahP1}</Text>
      <Text style={styles.text}>{devCoachText.priscillahP2}</Text>
      <Text style={styles.text}>{devCoachText.priscillahP3}</Text>
      <View>
        <ContactButton title='email' url='mailto:priscillah.osikominu@nhs.net' text='priscillah.osikominu@nhs.net' />
        <ContactButton title='Phone Number' url='tel:07903949908' text='07903949908' />
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