import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import devCoachText from '../../components/devCoachText';
import Header from '../../components/Header';
import BlueButton from '../../components/Buttons/BlueButton';

export default function DevCoach() {
  return (
    <View>
      <Header title='Development Coaches' />
      <Text style={styles.text}>{devCoachText.p1}</Text>
      <Text style={styles.text}>{devCoachText.p2}</Text>
      <Text style={styles.text}>{devCoachText.p3}</Text>
      <View style={{ marginTop: 20, }}>
        <BlueButton title='East and North Hertfordshire' onPress='DCEastHerts'/>
        <BlueButton title='Princess Alexandra NHS Trust' onPress='DCpah'/>
        <BlueButton title='West Hertfordshire NHS Trust' onPress='DCWestHerts'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
    marginVertical: 5,
    marginTop: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  }
});