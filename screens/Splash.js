import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

function Splash() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-letter-blue.png')} style={styles.image}/>
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150, 
  }
});