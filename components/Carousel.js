import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import * as Linking from 'expo-linking';

import { firebase } from '../config/firebase';
import colors from '../config/colors';

function Carousel(props) {
  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('News');

  const [selected, setSelected] = useState();

  const feeder = async () => {
    todoRef
    .onSnapshot( 
      querySnapshot => {
      const users = []
      querySnapshot.forEach((doc) => {
        const {title, date, text, url} = doc.data()
        users.push({
          id: doc.id,
          title,
          date,
          text,
          url,
        })
      })
      setUsers(users)
    })
  };

  useEffect(() => {
    feeder();
  });


  return (
   <View>
    <FlatList 
      data={users}
      keyExtractor={item => item.id}
      horizontal
      renderItem={({item}) => (
        <Pressable 
          onPress={() => Linking.openURL(`${item.url}`).catch(err => alert.error('Error', err))}
          children={() => { setSelected(item.id) }}
          style={[ item === selected ? {backgroundColor: colors.gray} : {backgroundColor: colors.primary}, styles.cardContainer ]}>
          <View>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
            <Text style={styles.textText}>{item.text}</Text>
          </View>
        </Pressable>
      )}
    />
   </View>
  );
}

export default Carousel;

const styles = StyleSheet.create({
  cardContainer: {
    height: 190,
    width: 230, 
    // backgroundColor: colors.primary,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 15,

    borderRadius: 20,
  },
  titleText: {
    color: colors.white,
    fontSize: 19,
    fontWeight: '600',
    alignSelf: 'center',
  },
  textText: {
    color: colors.white,
    fontSize: 16,
    alignSelf: 'center',
    paddingTop: 10,
  },
  dateText: {
    color: colors.gray,
    fontSize: 16,
    alignSelf: 'center',
    // paddingTop: 10,
  },
});