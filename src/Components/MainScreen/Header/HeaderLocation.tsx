import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Context } from '../../Utils/Context';

interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}

function HeaderLocation({}: any) {
   const { pressHandler, pressedCity } = useContext(Context);

   return (
      <TouchableOpacity style={styles.container} onPress={pressHandler}>
         <>
            <Text style={styles.locationText}>{pressedCity}, Slovakia</Text>
            <Image
               style={styles.icon}
               source={require('../../../../assets/location.png')}
            />
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
      alignItems: 'center',
   }, 
   icon: {
      marginLeft: 3,
   },
   locationText: {
      color: '#0DA0EA',
      fontSize: 16,
      marginLeft: 6,
   },
});
export default HeaderLocation;
