import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DetailItem from './DetailItem';
import { Context } from '../../Context';

function DetailsList() {
   const { pressedCity, data, pressedSearch } = useContext(Context);

   // setTimeout(() => { 
   // }, 1000);

   const GetAll = () => {
      return (
         <>
            {data&& (
               <View style={styles.container}>
                  <View style={styles.row}>
                     <DetailItem
                        icon={require('../../../../assets/humidity.png')}
                        term='Humidity'
                        value={data.main.humidity}
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
            )}
         </>
      );
   }

   return (
      <>
         {<GetAll/>}
      </>
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
