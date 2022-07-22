import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Pressable, StyleSheet } from 'react-native';
import { firebase } from '../config/firebase';
import colors from '../config/colors';
import LinkedLists from './LinkedLists';
import Carousel from './Carousel';

export default function Fetch({dbname}) {
  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection(dbname);

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
  })

  return (
    <FlatList
        // style={{ height: '100%' }}
        data={users}
        keyExtractor={item => item.id}
        ListHeaderComponent={(<Carousel />)}
        renderItem={({ item }) => {
          return (
            <LinkedLists 
              title={item.title}
              date={item.date}
              text={item.text}
              onPress={() => Linking.openURL(`${item.url}`).catch(err => alert.error('Error', err))}
            />
          );
        }}
      />
  );
}


