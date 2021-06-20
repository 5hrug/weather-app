import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}
function DetailItem(props: Props) {
   return (
      <View style={styles.container}>
         <Text style={styles.icon}>icon</Text>

         <Text style={styles.day}>Day</Text>
         <View style={styles.group}>
            <Text>group</Text>
         </View>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: '#ffffff',
      width: 95,
      height: 101, 
   
   },
   DetailItem: {},
   day: {},
   icon: {},
   group: {
      marginBottom:16,
   },
});
export default DetailItem;
