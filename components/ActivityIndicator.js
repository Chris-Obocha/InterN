import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator({ visible }) {
  if(!visible) return null

  return (
      <LottieView
        source={require('../assets/animation/loading-animation.json')}
        autoPlay
        loop
      />
  );
}

export default ActivityIndicator;
