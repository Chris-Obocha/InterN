import React, { useState, useEffect } from 'react';
import { FlatList, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { firebase } from '../config/firebase';
import colors from '../config/colors';
import Header from '../components/Header';
import InfoButton from '../components/Buttons/InfoButton';
import LinkedLists from '../components/LinkedLists';
import * as Linking from 'expo-linking';
import { useNavigation } from '@react-navigation/core';
import BlueButton from '../components/Buttons/BlueButton';
import InfoFlatlistHeader from '../components/InfoFlatlistHeader';
import ARText from '../components/ARText';
import InfoLinkedList from '../components/InfoLinkedList';


function InfoScreen() {
  const navigation = useNavigation();

  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('featured');
  
  const todoRefFunction = async () => {
    todoRef
    .onSnapshot( 
      querySnapshot => {
      const users = []
      querySnapshot.forEach((doc) => {
        const {title, text, date, url} = doc.data()
        users.push({
          id: doc.id,
          title,
          text, date, url,
        })
      })
      setUsers(users)
    })
  };
    
  useEffect(() => {
    todoRefFunction();
  });

  return (
    <ScrollView>
      <Header title='Info Screen' text='This app is designed for...' />
      <InfoFlatlistHeader />
      <InfoLinkedList title={ARText.item1.title} text={ARText.item1.text} url={ARText.item1.url} />
      <InfoLinkedList title={ARText.item2.title} text={ARText.item2.text} url={ARText.item2.url} />
      
      {/* <FlatList
        style={{ height: '100%' }}
        data={users}
        numColumns={1}
        ListHeaderComponent={InfoFlatlist}
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
      /> */}
    </ScrollView>
  );
}

export default InfoScreen;

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 25,
    marginBottom: -10,
    color: colors.dark,
    alignSelf: 'center',
  },
});