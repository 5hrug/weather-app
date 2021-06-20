import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}
function PeakOfTheDay(props: Props) {
   return (
      <View style={styles.container}>
         <Text style={styles.value}>35</Text>
         <Text style={styles.celsius}>&deg;</Text>
         <Text style={styles.c}>C</Text>
         <Text style={styles.arrow}>ar</Text>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
   },
   celsius: {},
   value: {},
   arrow: {},
   c: {},
});
export default PeakOfTheDay;
