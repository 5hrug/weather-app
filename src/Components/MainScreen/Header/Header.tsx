import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderLocation from './HeaderLocation';

function Header({pressHandler}:any) {
   return (
     <View style={styles.container}>
       <Text>kjnasd asnd kjasnd </Text>
         <HeaderLocation pressHandler={pressHandler}/>
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
