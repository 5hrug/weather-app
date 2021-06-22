import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DetailItem from './DetailItem';
import { TodosContext } from '../../Context';

function DetailsList() {
   // const data = useContext(TodosContext);

   setTimeout(() => {
      
   }, 1000);
   // console.log('wat:', data);

   return (
      <View style={styles.container}>
         <View style={styles.row}>
            <DetailItem
               icon={require('../../../../assets/humidity.png')}
               term='Humidity'
               // value={wat.main.humidity}
            />
            <DetailItem
               icon={require('../../../../assets/pressure.png')}
               term='Pressure'
            />
            <DetailItem
               icon={require('../../../../assets/wind.png')}
               term='Wind'
            />
         </View>
         <View style={styles.row}>
            <DetailItem
               icon={require('../../../../assets/sunrise.png')}
               term='Sunrise'
            />
            <DetailItem
               icon={require('../../../../assets/sunset.png')}
               term='Sunset'
            />
            <DetailItem
               icon={require('../../../../assets/daytime.png')}
               term='Daytime'
            />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {},
   row: {
      height: 101,
      width: '100%',
      flexDirection: 'row',
   },
});

export default DetailsList;
