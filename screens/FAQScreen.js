import { Animated, StatusBar, StyleSheet, Text, View, FlatList, Pressable, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { firebase } from '../config/firebase';

import Screen from '../components/Screen';
import colors from '../config/colors';

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
        backgroundColor: '#007afe',
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
  const todoRef = firebase.firestore().collection('far');

  const feeder = async () => {
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

  // useEffect(async () => {
  //   todoRef
  //   .onSnapshot( 
  //     querySnapshot => {
  //     const users = []
  //     querySnapshot.forEach((doc) => {
  //       const {question, answer} = doc.data()
  //       users.push({
  //         id: doc.id,
  //         question,
  //         answer,
  //       })
  //     })
  //     setUsers(users)
  //   })
  // }, [])

  useEffect(() => {
    feeder();
  });

  return (
    <Screen>
      <StatusBar hidden />
      <Backdrop/>
      <Square />
      <View>
        <Text style={styles.pageHeading}>FAQs</Text>
      </View>
      <FlatList
        style={{height:'100%', marginTop: 20}}
        data={users}
        numColumns={1}
        renderItem={({item}) => (
          <Pressable
            style={styles.container}
          >
            <View style={styles.innerContainer}>
              <Text style={styles.itemHeading}>{item.question}</Text>
              <Text style={styles.itemText}>{item.answer}</Text>
            </View> 
              
          </Pressable>

        )}
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
      fontWeight: 'bold',
      fontSize: 24,
      marginBottom: 5,
  },
  itemText: {
      fontWeight: '300'
  },
  pageHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
    color: '#fff',
    alignSelf: 'center',
},
});

export default FAQScreen
