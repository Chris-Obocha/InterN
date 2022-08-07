import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import * as Linking from 'expo-linking';

import { firebase } from '../config/firebase';
import Carousel from '../components/Carousel';
import colors from '../config/colors';
import LinkedLists from '../components/LinkedLists';
import Screen from '../components/Screen';
import AppText from '../components/AppText';

function HomeScreen(props) {

  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('News');

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
    <Screen>
        {/* <Header text='Here you can find updates from the Trust, news, and upcoming events' /> */}
        <FlatList
        data={users}
        keyExtractor={item => item.id}
        ListHeaderComponent={(
          <View>
            {/* <Text style={styles.heading}>Featured</Text> */}
            <Carousel />
            <AppText style={styles.heading}>Past News</AppText>
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
    </Screen>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.black,
    alignSelf: 'center',
    paddingTop: 15,
  },
});