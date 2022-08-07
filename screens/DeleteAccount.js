import React from "react";
import { View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { firebase } from '../config/firebase';
import { useNavigation } from '@react-navigation/core';

import colors from "../config/colors";
import AppText from '../components/AppText';

export default function DeleteAccount() {
  
  const navigation = useNavigation();
  const user = firebase.auth().currentUser;

  const handleDelete = () => {
    try {
      user.delete();
    } catch (e) {
      alert(e)
    }
  }

  const deleteFunc = () => Alert.alert(
    "Delete Account",
    "Are you sure you want to delete this account?",
    [
      {
        text: "Cancel",
        onPress: () => navigation.goBack,
        style: "cancel"
      },
      { text: "OK", onPress: () => handleDelete() }
    ]
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={ styles.button } onPress={deleteFunc}>
        <AppText style={styles.text}>Delete Account</AppText>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: colors.danger,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});