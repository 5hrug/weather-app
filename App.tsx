import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import MainScreen from './src/Screens/MainScreen';
import Constants from 'expo-constants';
import { SwipeablePanel } from 'rn-swipeable-panel';

export default function App() {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  return (
    <View style={styles.container}>
      {/* <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <Text>hey</Text>
      </SwipeablePanel> */}
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
      height: '100%',

      marginTop: Platform.OS === 'android'? Constants.statusBarHeight : 0, 
   },
});
