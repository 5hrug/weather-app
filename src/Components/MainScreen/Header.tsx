import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PeakList from './PeakList';
import ItemMainValue from './ItemMainValue';
import HeaderLocation from './HeaderLocation';

function Header() {
   return (
     <View style={styles.container}>
       <Text>kjnasd asnd kjasnd </Text>
         <HeaderLocation/>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
  },
  location: {

    backgroundColor:'red',
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 16,
    
  }
});

export default Header;
