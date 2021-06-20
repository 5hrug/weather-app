import React from 'react';
import {
   View,
   StyleSheet,
   ImageBackground,
   Text,
   Dimensions,
} from 'react-native';
import { Image } from 'react-native-elements';
import Panel from '../Components/SearchScreen/Panel';

function MainScreen() {
   return <Panel />;
}
const styles = StyleSheet.create({
   container: {},
   graphic: {
      height: 333,
   },
   text: {},
});
export default MainScreen;
