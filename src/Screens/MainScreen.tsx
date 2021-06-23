import React, { useContext } from 'react';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Context } from '../Components/Utils/Context';
import SearchPanel from '../Components/SearchScreen/SearchPanel';
import Panel from '../Components/MainScreen/Panel';

const windowWidth = Dimensions.get('window').width;

function MainScreen() {
   const { pressedSearch } = useContext(Context);
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
const styles = StyleSheet.create({
   graphic: {
      height: windowWidth * 0.8,
   },
});
export default MainScreen;
