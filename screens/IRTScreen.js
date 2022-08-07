import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from 'expo-linking';

import DownloadBlueButton from '../components/Buttons/DownloadBlueButton';
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from '../components/AppText';

function IRTScreen(props) {
  return (
    <Screen style={styles.screenview}>
      <View style={styles.container}>
        <AppText style={styles.text}>The International Recruitment Team are available to assist you with your journey to employment in the UK and pastoral support when you arrive.  The team cover all the NHS hospitals and organisations across Hertfordshire and West Essex.</AppText>
      </View>  
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.mail}
          onPress={() => Linking.openURL("mailto:hweicsirteam@nhs.net")}>
          <AppText style={styles.italicText}>Alternatively send an email to the International Recruitment generic inbox: <AppText style={{color: colors.primary}}>hweicsirteam@nhs.net</AppText> </AppText>
          <MaterialCommunityIcons name="mail" color={colors.gray} size={26} />
        </TouchableOpacity>
      </View>
      <DownloadBlueButton style={styles.bottomButton} title='Welcome Booklet' 
            onPress={() => Linking.openURL('https://firebasestorage.googleapis.com/v0/b/intern-a9ad7.appspot.com/o/Coaching%20Resources%2FWelcome%20Pack%20-%20version5.pdf?alt=media&token=522cc8ee-8799-4e9c-9c0b-aae355d84522')}
          />
    </Screen>
  );
}

export default IRTScreen;

const styles = StyleSheet.create({
  italicText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  container: {
    padding: 20,
    marginHorizontal: 15,
  },
  mail: {
    alignItems: 'center',
    marginTop: 7,
  },
  text:{
    fontSize: 16,
    paddingBottom: 10,
  },
  screenview: {
    justifyContent: 'center'
  }
})