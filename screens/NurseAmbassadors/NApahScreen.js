import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import InfoHeader from '../../components/InfoHeader';
import ContactButton from '../../components/Buttons/ContactButton';
import NAText from '../../components/NAText';
import AppText from '../../components/AppText';

export default function NApahScreen() {
  return (
    <View style={{ flex: 1 }}>
      <InfoHeader title='Uzoma Onouha (Uzo)' text='Nurse Ambassador' imageSrc={require('../../assets/uzo.jpg')}/>
      <ScrollView>
        <AppText style={styles.heading}>Profile</AppText>
        <AppText style={styles.text}>{NAText.pah1}</AppText>
        <AppText style={styles.text}>{NAText.pah2}</AppText>
        <AppText style={styles.text}>{NAText.pah3}</AppText>
        <View style={styles.btnContainer}>
          <ContactButton title='email' url='mailto:uzoma.onuoha@nhs.net' text='uzoma.onuoha@nhs.net' />
          <ContactButton title='Phone Number' url='tel:07394402038' text='07394402038' />
        </View>
      </ScrollView>
    </View>
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