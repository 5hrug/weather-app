import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { Image } from 'react-native-elements';

function MainScreen() {
   return (
      <View style={styles.container}>
         {/* <Image
            style={styles.graphic}
            source={require('../../assets/graphic.jpg')} 
         /> */}
         <ImageBackground
            source={require('../../assets/graphic.jpg')}
            style={styles.graphic}
            resizeMethod="resize"
 
            imageStyle={{ 
               // resizeMode: 'contain',
               resizeMode: 'contain',


            }}></ImageBackground>
         {/* <Image source={require('../../assets/graphic.jpg')} style={styles.graphic} /> */}
         {/* <Text style={styles.text}> aspon daco</Text> */}
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      height: '100%',
      overflow: 'hidden',
      // justifyContent: 'flex-start',
      // alignItems: 'flex-start',
   },
   graphic: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      height: '100%',
      // marginTop: -100,
      top: 0, 
      left: 0,
      bottom:0,
   }, 
   text: {
   },
});
export default MainScreen;
