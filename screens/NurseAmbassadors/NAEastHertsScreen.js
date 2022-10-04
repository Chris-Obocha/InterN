import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';


import InfoHeader from '../../components/InfoHeader';
import AppText from '../../components/AppText';
import NAText from '../../components/NAText';
import ContactButton from '../../components/Buttons/ContactButton';

export default function NAEastHertsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <InfoHeader title='Mary Oyakhirome' text='Nurse Ambassador' imageSrc={require('../../assets/mary.jpg')}/>
      <ScrollView>
        <AppText style={styles.heading}>Profile</AppText>
        <AppText style={styles.text}>{NAText.enh1}</AppText>
        <AppText style={styles.text}>{NAText.enh2}</AppText>
        <AppText style={styles.text}>{NAText.enh3}</AppText>
        <AppText style={styles.text}>{NAText.enh4}</AppText>
        <View>
          <ContactButton title='email' url='mailto:mary.oyakhirome@nhs.net' text='mary.oyakhirome@nhs.net' />
          <ContactButton title='Phone Number' url='tel:07855981648' text='07855981648'  />
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