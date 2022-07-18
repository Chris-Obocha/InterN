import React from 'react';
import Constants from "expo-constants";
import { Text, View, StyleSheet } from 'react-native';

import Screen from './Screen';
import colors from '../config/colors';

function Header({title, text}) {
  return (
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
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
    paddingBottom: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    // marginBottom: 20,
  },
  text: {
    color: colors.white,
    alignSelf: 'center',
    paddingTop: 5,
  },
});