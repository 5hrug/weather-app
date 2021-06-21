import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderLocation from './HeaderLocation';
import moment from 'moment';

function Header({ pressHandler }: any) {
   const [tim, setTime] = useState(
      moment().format('dddd, DD MMM YYYY | hh:mmA')
  );
  
   useEffect(() => {
      setTime(moment().format('dddd, DD MMM YYYY | hh:mmA'));
   }, [tim]);

   return (
      <View style={styles.container}>
         <Text style={styles.timeDateText}>{tim}</Text>
         <HeaderLocation pressHandler={pressHandler} />
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
   },
});

export default Header;
