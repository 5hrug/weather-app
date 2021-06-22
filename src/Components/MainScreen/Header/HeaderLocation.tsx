import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../../Context';

interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}

function HeaderLocation({  }: any) {
   const {pressHandler} = useContext(Context);


   return (
      <TouchableOpacity style={styles.container} onPress={pressHandler}>
         <>
            <Text style={styles.locationText}>Kosice, Slovakia</Text>
            <Text style={styles.icon}>S</Text>
         </>
      </TouchableOpacity>
   );
}
const styles = StyleSheet.create({
   container: {
      backgroundColor: 'rgba(13, 159, 234, 0.08)',
      alignSelf: 'flex-end',
      borderBottomLeftRadius: 30,
      borderTopRightRadius: 30,
      flexDirection: 'row',
      marginLeft: 'auto',
      width: '41%',
      height: 48,
      // justifyContent: 'center',
      alignItems: 'center',
   },
   icon: { color: '#0DA0EA' },
   locationText: {
      color: '#0DA0EA',
      fontSize: 16,
      marginLeft: 6,
   },
});
export default HeaderLocation;
