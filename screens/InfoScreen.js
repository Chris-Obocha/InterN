import React from 'react';
import { ScrollView } from 'react-native';

import InfoFlatlistHeader from '../components/InfoFlatlistHeader';
import ARText from '../components/ARText';
import InfoLinkedList from '../components/InfoLinkedList';


function InfoScreen() {

  return (
    <ScrollView>
      <InfoFlatlistHeader />
      <InfoLinkedList title={ARText.item1.title} text={ARText.item1.text} url={ARText.item1.url} />
      <InfoLinkedList title={ARText.item2.title} text={ARText.item2.text} url={ARText.item2.url} />
    </ScrollView>
  );
}

export default InfoScreen;
