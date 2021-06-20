import React from 'react';
import {
   View,
   StyleSheet,
   ImageBackground,
   Text,
   Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
console.log(windowWidth);

function MainScreen() {
   return (
      <ImageBackground
         source={require('../../assets/graphic.jpg')}
         style={styles.graphic}
         imageStyle={{  }}></ImageBackground>
   );
}
// resizeMode : 'contain'
const styles = StyleSheet.create({
   container: {},
   graphic: {
      height: windowWidth * 0.8, 
   },
   text: {},
});
export default MainScreen;
