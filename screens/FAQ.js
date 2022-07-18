import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, FlatList, Pressable } from 'react-native';

import { firebase } from './config/firebase';
import Screen from './components/Screen'; 
import colors from './config/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Square = () => {
  return (
    <Animated.View
      style={{
        width: 400,
        height: 400,
        backgroundColor: '#007afe',
        borderRadius: 86,
        position: 'absolute',
        top: -400 * 0.6,
        left: -400 * 0.32,
        transform: [
          {
            rotate: '45deg',
          },
        ],
      }}
    />
  );
};

export default function FAQ() {

  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('far');

  const todoRefFunction = async () => {
    todoRef
    .onSnapshot( 
      querySnapshot => {
      const users = []
      querySnapshot.forEach((doc) => {
        const {question, answer} = doc.data()
        users.push({
          id: doc.id,
          question,
          answer,
        })
      })
      setUsers(users)
    })
  };

  useEffect(() => {
    todoRefFunction();
  });


  return (
    <Screen>
      <StatusBar style="auto" />
      {/* <Backdrop />  */}
      <Square />
      <View>
        <Text style={styles.header}>FAQs</Text>
      </View>
      <FlatList
        style={{ height: '100%', marginTop: 20 }}
        data={users}
        numColumns={1}
        renderItem={({item}) => (
          <View style={[styles.container, styles.elevation]}>
            <Pressable>
              <View style={styles.innerContainer}>
                <Text>{item.question}</Text>
                <Text>{item.answer}</Text>
              </View>
            </Pressable>
          </View>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 20,

    shadowColor: colors.dark,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation:{
    elevation: 20,
    shadowColor: colors.dark,
  }, 
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
    color: colors.white,
    alignSelf: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  itemHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
  },
  itemText: {
    fontWeight: '300'
  },
});
