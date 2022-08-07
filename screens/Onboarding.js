import * as React from 'react';
import { StatusBar, Animated, FlatList, Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

const bgs = [ '#007266', '#43BA75', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    "key": "3571747",
    "title": "Hertfordshire and West Essex ICS",
    "description": "HWEICS comprises of three CCGs, three acute hospitals, one ambulance Trust, three community and mental health trusts and two County Councils. The ICS is responsible for providing health and social care services for a population of 1.5 million.",
    "image": require('../assets/HWEICS_logos_RGB_HWEICS_logo.png')
  },
  {
    "key": "3571572",
    "title": "InterN",
    "description": "The goal of this project is to create a careers hub mobile app for the incoming international nurses in order to provide them with learning materials, assistance, and help acclimatizing to the UK",
    "image": require('../assets/InterN-green-logoV3.png')
  },
  {
    "key": "3571680",
    "title": "Home to several towns",
    "description": "The counties are home to several lively towns including Watford, Hemel Hempstead, Potters Bar, Hatfield, Welwyn Garden City, Stevenage, Harlow and Hertford, as well as the city of St Albans.  Hertfordshire is home to the first garden cities - Letchworth and Welwyn, and has two major international airports, Luton and Stansted, close by.",
    "image": require('../assets/illustration2.png')
  },
  {
    "key": "3571603",
    "title": "Great for families",
    "description": "with fantastic schools and plenty on offer within the county and close by. In the 2020 Halifax Quality of Life survey east Hertfordshire was voted as the best place to live in the UK. Harlow is also attracting investment and developing a reputation as a science and pharmaceutical hub.",
    "image": require('../assets/illustration.png')
  }
];

const Indicator = ({scrollX}) => {
  return <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row' }}>
   {DATA.map((_, i) => {
     const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1.4, 0.8],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.6, 0.9, 0.4],
      extrapolate: 'clamp',
    });

     return <Animated.View
      key={`indicator=${i}`}
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        opacity,
        margin: 10,
        transform: [{
          scale,
        }]
      }}
    />
   })}
  </View>
}

const Backdrop = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor,
        }
      ]}
    />
  );
};

const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width))
  ,1);

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '-35deg', '35deg'],
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });

  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: '#fff',
        borderRadius: 86,
        position: 'absolute',
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [
          {
            rotate,
          },
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
        <View style={styles.btn}>
          <Text style={{ fontWeight: '500' }}>Register</Text>  
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <View style={styles.btn}>
          <Text style={{ fontWeight: '500' }}>Login</Text>  
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function Onboarding() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX}/>
      <Square scrollX={scrollX}/>
      <Animated.FlatList 
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}], 
          {useNativeDriver: false}
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: 'center', padding: 20 }}>
              <View 
                style={{ 
                  flex: 0.7, 
                  justifyContent: 'center' 
              }}>
                <Image 
                  source={item.image} 
                  style={{
                      width: width / 2, 
                      height: width / 2, 
                      resizeMode: 'contain',
                    }}
                  />
              </View>
              <View style={{ flex: 0.3 }}>
                <Text style={{ color: '#fff', fontWeight: '800', fontSize: 28, marginBottom: 10 }}>{item.title}</Text>
                <Text style={{ color: '#fff', fontWeight: '300' }}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
      <Footer />
      <Indicator scrollX={scrollX} />
    </View>
  );
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
btn: {
  width: 110, 
  height: 55,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 15,
  marginHorizontal: 25,
  backgroundColor: 'white',
},
btnContainer: {
  position: 'absolute',
  top: height * 0.85,
  marginBottom: 40, 
  flexDirection: 'row',
},
});