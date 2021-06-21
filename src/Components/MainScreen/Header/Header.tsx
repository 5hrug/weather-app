import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderLocation from './HeaderLocation';

function Header({pressHandler}:any) {
   return (
     <View style={styles.container}>
       <Text style={styles.timeDateText} >kjnasd asnd kjasnd </Text>
         <HeaderLocation pressHandler={pressHandler}/>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
  },
  timeDateText: {
    alignSelf: 'center',
    marginLeft: 8,
    fontSize: 14,
    color: '#999999',
    
  }
});

export default Header;
