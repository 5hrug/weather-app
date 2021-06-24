import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DetailItem from './DetailItem';
import { Context } from '../../Utils/Context';
import {
   unixToHours,
   unixToMinutes,
   calculateDayTime,
   checkAmPm,
} from '../../Utils/Helpers';

function DetailsList() {
   const { data } = useContext(Context);
   let calcDayTime = '';
   data &&
      (calcDayTime = calculateDayTime(
         data.sys.sunrise,
         data.sys.sunset,
         data.timezone
      ));

   return (
      <>
         {data && (
            <View>
               <View style={styles.row}>
                  <DetailItem
                     icon={require('../../../../assets/humidity.png')}
                     term='Humidity'
                     value={data.main.humidity}
                     scale='%'
                  />
                  <DetailItem
                     icon={require('../../../../assets/pressure.png')}
                     term='Pressure'
                     value={data.main.pressure}
                     scale='mBar'
                  />
                  <DetailItem
                     icon={require('../../../../assets/wind.png')}
                     term='Wind'
                     value={data.wind.speed}
                     scale='km/h'
                  />
               </View>
               <View style={styles.row}>
                  <DetailItem
                     icon={require('../../../../assets/sunrise.png')}
                     term='Sunrise'
                     value={
                        unixToHours(data.sys.sunrise, data.timezone) +
                        ':' +
                        unixToMinutes(data.sys.sunrise)
                     }
                     scale='AM'
                  />
                  <DetailItem
                     icon={require('../../../../assets/sunset.png')}
                     term='Sunset'
                     value={
                        checkAmPm(unixToHours(data.sys.sunset, data.timezone)) +
                        ':' +
                        unixToMinutes(data.sys.sunset)
                     }
                     scale='PM'
                  />
                  {calcDayTime && (
                     <DetailItem
                        icon={require('../../../../assets/daytime.png')}
                        term='Daytime'
                        value={calcDayTime}
                     />
                  )}
               </View>
            </View>
         )}
      </>
   );
}

const styles = StyleSheet.create({
   row: {
      height: 100,
      flexDirection: 'row',
      marginHorizontal: '3%',
   },
});

export default DetailsList;
