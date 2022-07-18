import React from 'react';
import * as Linking from 'expo-linking';
import { Text, View, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function InfoLinkedList({ title, text, url}) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(`${url}`).catch(err => alert.error('Error', err))}>
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text numberOfLines={3} style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default InfoLinkedList;

const styles = StyleSheet.create({
  btnContainer: {
    margin: 10,
  },
  container: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: colors.darkgray,
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
  },
  title: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 3,
    textAlign: 'left',
  },
  text: {
    fontSize: 16,
    marginTop: 7,
    color: colors.dark,
    textAlign: 'left',
  },
});