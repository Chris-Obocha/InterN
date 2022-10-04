import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native';
import * as Linking from 'expo-linking';

import InfoHeader from '../../components/InfoHeader';
import AppText from '../../components/AppText';
import devCoachText from '../../components/devCoachText';
import DownloadBlueButton from '../../components/Buttons/DownloadBlueButton';
import ContactButton from '../../components/Buttons/ContactButton';

export default function DCWestHertsScreen() {
  return (
    <View style={{ flex: 1 }}>
    <InfoHeader title='Priscillah Osikominu' text='Development Coach' imageSrc={require('../../assets/priscillah1.jpg')}/>
    <ScrollView>
    <AppText style={styles.heading}>Profile</AppText>
    <AppText style={styles.text}>{devCoachText.priscillahP1}</AppText>
    <AppText style={styles.text}>{devCoachText.priscillahP2}</AppText>
    <AppText style={styles.text}>{devCoachText.priscillahP3}</AppText>
    <View>
      <ContactButton title='email' url='mailto:priscillah.osikominu@nhs.net' text='priscillah.osikominu@nhs.net' />
      <ContactButton title='Phone Number' url='tel:07971992270' text='07971992270' />
      <DownloadBlueButton style={styles.bottomButton} title='Coaching Resources' 
          onPress={() => Linking.openURL('https://firebasestorage.googleapis.com/v0/b/intern-a9ad7.appspot.com/o/Coaching%20Resources%2FWelcome%20Pack%20-%20version5.pdf?alt=media&token=522cc8ee-8799-4e9c-9c0b-aae355d84522')} />
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