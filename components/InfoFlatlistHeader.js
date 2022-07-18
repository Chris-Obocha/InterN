import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import InfoButton from './Buttons/InfoButton';
import colors from '../config/colors';

function InfoFlatlistHeader(props) {

  return (
    <View style={styles.container}>
      <InfoButton title='Development Coach' text='Meet your Dev Coach' route='DevCoach'/>
      <InfoButton title='Nursing Ambassadors' text='Meet your Nursing Ambassadors' route='NAScreen' />
      <InfoButton title='International Recruitment' route='InfoScreen'/>
      <Text style={styles.heading}>Additional Resources</Text>
    </View>
);
}

export default InfoFlatlistHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 25,
    marginBottom: -10,
    color: colors.dark,
    alignSelf: 'center',
  },
});