import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import InfoHeader from '../../components/InfoHeader';
import ContactButton from '../../components/Buttons/ContactButton';
import NAText from '../../components/NAText';

export default function NApahScreen() {
  return (
    <ScrollView>
      <InfoHeader title='Uzoma Onouha (Uzo)' text='Nurse Ambassador @WPrincessAlexandraHospital' imageSrc={require('../../assets/uzo.jpg')}/>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>{NAText.pah1}</Text>
      <Text style={styles.text}>{NAText.pah2}</Text>
      <Text style={styles.text}>{NAText.pah3}</Text>
      <View style={styles.btnContainer}>
        <ContactButton title='email' url='mailto:uzoma.onuoha@nhs.net' text='uzoma.onuoha@nhs.net' />
        <ContactButton title='Phone Number' url='tel:07394402038' text='07394402038' />
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
    marginTop: 40,
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