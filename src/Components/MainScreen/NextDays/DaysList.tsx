import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Day from './NextDay';
import { Context } from '../../Context';
import moment from 'moment';

function DaysList() {
   const { forecast } = useContext(Context);
   return (
      <>
         {forecast && (
            <View style={styles.container}>
               <Day
                  icon={require('../../../../assets/nextSun.png')}
                  day={moment().add(1, 'day').format('ddd, DD')}
                  top={Math.round(forecast.daily[0].temp.max)}
                  bot={Math.round(forecast.daily[0].temp.min)}
               />
               <Day
                  icon={require('../../../../assets/nextCloud.png')}
                  day={moment().add(2, 'day').format('ddd, DD')}
                  top={Math.round(forecast.daily[1].temp.max)}
                  bot={Math.round(forecast.daily[1].temp.min)}
               />
               <Day
                  icon={require('../../../../assets/nextHazy.png')}
                  day={moment().add(3, 'day').format('ddd, DD')}
                  top={Math.round(forecast.daily[2].temp.max)}
                  bot={Math.round(forecast.daily[2].temp.min)}
               />
            </View>
         )}
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      marginBottom: 30,
      marginHorizontal: '3%',
   },
});

export default DaysList;
