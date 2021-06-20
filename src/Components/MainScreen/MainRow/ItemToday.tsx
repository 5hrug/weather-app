import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}
function ItemToday(props: Props) {
   return (
      <View style={styles.container}>
         <Text style={styles.value}>icon</Text>
         <Text style={styles.celsius}>Sunny</Text>
         
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
   },
   celsius: {},
   value: {},
   arrow: {},
   c: {},
});
export default ItemToday;
