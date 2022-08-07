import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import AppText from '../../components/AppText';
import devCoachText from '../../components/devCoachText';
import BlueButton from '../../components/Buttons/BlueButton';

export default function DevCoach() {
  return (
    <ScrollView style={{ marginTop: 20, }}>
      <AppText style={styles.text}>{devCoachText.p1}</AppText>
      <AppText style={styles.text}>{devCoachText.p2}</AppText>
      <AppText style={styles.text}>{devCoachText.p3}</AppText>
      <View style={{ marginTop: 20, }}>
        <BlueButton title='East & North Hertfordshire NHS Trust' onPress='DCEastHerts'/>
        <BlueButton title='Princess Alexandra NHS Trust' onPress='DCpah'/>
        <BlueButton title='West Hertfordshire NHS Trust' onPress='DCWestHerts'/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
    marginVertical: 5,
    marginTop: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    // textAlign: 'center',
  }
});