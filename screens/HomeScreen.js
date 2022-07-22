import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import * as Linking from 'expo-linking';

import { firebase } from '../config/firebase';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Fetch from '../components/Fetch';
import colors from '../config/colors';
import LinkedLists from '../components/LinkedLists';

function HomeScreen(props) {

  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('featured');

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

  const FlatlistHeader = () => {
    return (
      <View>
        <Text style={styles.heading}>Featured</Text>
        <Carousel />
        <Text style={styles.heading}>Past News</Text>
      </View>

    );
  };


  return (
    <View>
        <Header title='Home Screen' text='This app is designed for...' />
        <FlatList
        // style={{ height: '100%' }}
        data={users}
        keyExtractor={item => item.id}
        ListHeaderComponent={(
          <View>
            <Text style={styles.heading}>Featured</Text>
            <Carousel />
            <Text style={styles.heading}>Past News</Text>
          </View>
        )}
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
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.black,
    alignSelf: 'center',
    marginTop: 15,
  },
});