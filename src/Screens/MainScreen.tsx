import React, { useContext } from 'react';
import { Context } from '../Components/Utils/Context';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';
import SearchPanel from '../Components/SearchScreen/SearchPanel';
import Panel from '../Components/MainScreen/Panel';

const windowWidth = Dimensions.get('window').width;

function MainScreen() {
   const { changePanel } = useContext(Context);
   return (
      <>
         {/* <ImageBackground
            source={require('../../assets/graphic.jpg')}
            style={styles.graphic}
            imageStyle={{}}></ImageBackground> */}
         {/* {changePanel ? <SearchPanel /> : <Panel />} */}
         <Panel />
      </>
   );
}
const styles = StyleSheet.create({
   graphic: {
      height: windowWidth * 0.8,
   },
});
export default MainScreen;
