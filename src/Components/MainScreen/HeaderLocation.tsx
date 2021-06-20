import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}
function HeaderLocation(props: Props) {
   return (
      <TouchableHighlight>
         <View style={styles.container}>
            <Text style={styles.value}>icon</Text>
            <Text style={styles.celsius}>Sunny</Text>
         </View>
      </TouchableHighlight>
   );
}
const styles = StyleSheet.create({
   container: {
      backgroundColor: 'red',
      alignSelf: 'flex-end',
      borderBottomLeftRadius: 16,
      borderTopRightRadius: 16,
      flexDirection: 'row',
   },
   celsius: {},
   value: {},
   arrow: {},
   c: {},
});
export default HeaderLocation;
