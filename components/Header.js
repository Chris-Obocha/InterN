import React from 'react';
import Constants from "expo-constants";
import { Text, View, StyleSheet } from 'react-native';

import Screen from './Screen';
import AppText from './AppText';
import colors from '../config/colors';

function Header({title, text}) {
  return (
      <View style={styles.headerContainer}>
        {/* <Text style={styles.heading}>{title}</Text> */}
        <AppText style={styles.text}>{text}</AppText>
      </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  heading: {
    fontSize: 26,
    fontWeight: '700',
    alignSelf: 'center',
    paddingTop: Constants.statusBarHeight + 10,
    color: colors.white,
  },
  headerContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  text: {
    color: colors.white,
    alignSelf: 'center',
    marginHorizontal: 20,
    textAlign: 'center',
  },
});