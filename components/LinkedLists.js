import React from 'react';
import { Text, View, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

export default function LinkedLists({ title, text, date, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text numberOfLines={1} style={styles.date}>{date}</Text>
          <Text numberOfLines={3} style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

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
  date: {
    color: colors.darkgray,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    color: colors.dark,
    textAlign: 'left',
  },
});