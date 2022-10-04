import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

import AppText from '../../components/AppText';
import InfoHeader from '../../components/InfoHeader';
import devCoachText from '../../components/devCoachText';
import DownloadBlueButton from '../../components/Buttons/DownloadBlueButton';
import ContactButton from '../../components/Buttons/ContactButton';

export default function DCEastHertsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <InfoHeader title='Linda Whiteley' text='Development Coach' imageSrc={require('../../assets/linda.jpg')}/>
      <ScrollView style={{ marginBottom: 20 }}>
        <AppText style={styles.heading}>Profile</AppText>
        <AppText style={styles.text}>{devCoachText.lindaP1}</AppText>
        <AppText style={styles.text}>{devCoachText.lindaP2}</AppText>
        <AppText style={styles.text}>{devCoachText.lindaP3}</AppText>
        <View>
          <ContactButton title='email' url='mailto:linda.whiteley1@nhs.net' text='linda.whiteley1@nhs.net' />
          <ContactButton title='Phone Number' url='tel:07812785184' text='07812785184'/>
          <DownloadBlueButton style={styles.bottomButton} title='Coaching Resources' 
            onPress={() => Linking.openURL('https://firebasestorage.googleapis.com/v0/b/intern-a9ad7.appspot.com/o/Coaching%20Resources%2FWelcome%20Pack%20-%20version5.pdf?alt=media&token=522cc8ee-8799-4e9c-9c0b-aae355d84522')}
          />
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
    paddingTop: 15,
    marginBottom: -10,
    fontSize: 26,
    fontWeight: '600',
    alignSelf: 'center',
  }
});