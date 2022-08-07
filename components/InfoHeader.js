import React from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function InfoHeader({title, text, imageSrc}) {
  return (
      <View style={styles.headerContainer}>
        <View style={styles.textBody}>
          <AppText style={styles.heading}>{title}</AppText>
          <AppText style={styles.text}>{text}</AppText>
        </View>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={imageSrc}/>
        </View>
      </View>
  );
}

export default InfoHeader;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: '700',
    alignSelf: 'center',
    color: colors.white,
    textAlign: 'center',
    marginLeft: 15,
  },
  headerContainer: {
    backgroundColor: colors.primary,
    paddingBottom: 25,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'space-around',
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 37.5,
    alignSelf: 'center',
  },
  imgContainer: {
    flex: 1,
    marginTop: 50,
    marginRight: 10,
    borderRadius: 55,
    borderColor: '#3B92FE',
  },
  textBody: {
    flex: 3,
    marginLeft: 10,
  },
  text: {
    color: colors.white,
    fontStyle: 'italic',
    fontSize: 15,
    textAlign: 'center'
  }
});