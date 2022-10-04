import { Animated, StatusBar, StyleSheet, Text, View, FlatList, Pressable, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { firebase } from '../config/firebase';
import * as Linking from 'expo-linking';

import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Backdrop = () => {
  
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor: colors.grey,
        }
      ]}
    />
  );
};

const Square = () => {

  return (
    <Animated.View
      style={{
        width: 400,
        height: 400,
        backgroundColor: colors.primary,
        borderRadius: 86,
        position: 'absolute',
        top: -400 * 0.6,
        left: -400 * 0.3,
        transform: [
          {
            rotate: '45deg',
          },
        ],
      }}
    />
  );
};

const FAQScreen = () => {

  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('FAQs');

  const feeder = async () => {
    todoRef
    .onSnapshot( 
      querySnapshot => {
      const users = []
      querySnapshot.forEach((doc) => {
        const {question, answer, url} = doc.data()
        users.push({
          id: doc.id,
          question,
          answer,
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
      <StatusBar hidden />
      <Backdrop/>
      <Square />
      <View>
        <AppText style={styles.pageHeading}>FAQs</AppText>
      </View>
      <FlatList
        style={{height:'100%', marginTop: 20}}
        data={users}
        numColumns={1}
        renderItem={({item}) => {
          if(item.url) {
            return (
              <TouchableOpacity
                onPress={() => Linking.openURL(`${item.url}`).catch()}
                style={styles.container}
              >
                <View style={styles.innerContainer}>
                  <AppText style={styles.itemHeading}>{item.question}</AppText>
                  <AppText style={styles.itemText}>{item.answer}</AppText>
                </View> 
              </TouchableOpacity>
            )
          }
          return (
            <View
                style={styles.container}
            >
              <View style={styles.innerContainer}>
                <AppText style={styles.itemHeading}>{item.question}</AppText>
                <AppText style={styles.itemText}>{item.answer}</AppText>
              </View> 
            </View>
          )
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 15,
    margin:5,
    marginHorizontal: 20,

    shadowColor: colors.dark,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 2,
  },
  innerContainer: {
      alignItems: 'center',
      flexDirection: 'column',
  },
  itemHeading: {
      fontWeight: '500',
      fontSize: 24,
      marginBottom: 5,
  },
  itemText: {
      fontWeight: '300'
  },
  pageHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 5,
    color: '#fff',
    alignSelf: 'center',
},
});

export default FAQScreen
