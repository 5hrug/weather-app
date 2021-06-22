import React, { useContext } from 'react';
import {
   View,
   StyleSheet,
   ImageBackground,
   Text,
   Dimensions,
} from 'react-native';
import { CityPressed } from '../Components/Context';
import SearchPanel from '../Components/SearchScreen/Panel';
import Panel from '../Components/MainScreen/Panel';

const windowWidth = Dimensions.get('window').width;

function MainScreen() {
   const { pressedSearch } = useContext(CityPressed);
   console.log(pressedSearch);
   return (
      <>
         <ImageBackground
            source={require('../../assets/graphic.jpg')}
            style={styles.graphic}
            imageStyle={{}}></ImageBackground>
         {pressedSearch ? <SearchPanel /> : <Panel />}
      </>
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
