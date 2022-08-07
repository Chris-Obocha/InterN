import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import InfoButton from './Buttons/InfoButton';
import colors from '../config/colors';
import AppText from './AppText';

function InfoFlatlistHeader(props) {

  return (
    <View style={styles.container}>
      <InfoButton title='Development Coaches' text='Meet your Development Coach' route='DevCoach'/>
      <InfoButton title='Nursing Ambassadors' text='Meet your Nursing Ambassador' route='NAScreen' />
      <InfoButton title='International Recruitment' text='International Recruitment Team' route='IRTScreen'/>
      <AppText style={styles.heading}>Additional Resources</AppText>
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