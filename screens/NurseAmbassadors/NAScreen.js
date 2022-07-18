import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NAText from '../../components/NAText';
import Header from '../../components/Header';
import BlueButton from '../../components/Buttons/BlueButton';

export default function NAScreen() {
  return (
    <View>
      <Header title='Nursing Ambassadors' />
      <Text style={styles.text}>{NAText.p1}</Text>
      <Text style={styles.text}>{NAText.p2}</Text>
      <View style={{ marginTop: 20, }}>
        <BlueButton title='East and North Hertfordshire' onPress='NAEastHerts'/>
        <BlueButton title='Princess Alexandra NHS Trust' onPress='NApah'/>
        <BlueButton title='West Hertfordshire NHS Trust' onPress='NAWestHerts'/>
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