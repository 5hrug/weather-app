import React, { useContext } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Context } from '../Components/Utils/Context';
import SearchPanel from '../Components/SearchScreen/SearchPanel';
import Panel from '../Components/MainScreen/Panel';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

function MainScreen() {
   const { changePanel } = useContext(Context);
   return (
      <View style={styles.background}>
         <ImageBackground
            source={require('../../assets/graphic.jpg')}
            style={styles.graphic}></ImageBackground>
         {changePanel ? <SearchPanel /> : <Panel />} 
         {/* <Panel/> */}
      </View>
   );
}
const styles = StyleSheet.create({
   graphic: {
      height: height > width ? width * 0.8 : height / 2,

   },
   background: {
      maxWidth: 500,
      minWidth: height > width ? 0 : 500,
      alignSelf: height > width ? 'auto' : 'center',
      
      // for react-native-web
      shadowColor: '#000000',
      shadowOffset: {
         width: 0,
         height: 500,
      },
      shadowOpacity: 0.4,
      shadowRadius: height > width ? 0:800,
   },
});
export default MainScreen;
