import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DetailItem from './DetailItem';
import { Context } from '../../Context';

function DetailsList() {
   const { pressedCity, data, pressedSearch } = useContext(Context);

   const GetAll = () => {
      return (
         <>
            {data && (
               <View style={styles.container}>
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
                        value={data.sys.sunrise}
                        scale='AM'
                     />
                     <DetailItem
                        icon={require('../../../../assets/sunset.png')}
                        term='Sunset'
                        value={data.sys.sunset}
                        scale='PM'
                     />
                     <DetailItem
                        icon={require('../../../../assets/daytime.png')}
                        term='Daytime'
                        value={data.dt}
                        scale='13h 1m'
                     />
                  </View>
               </View>
            )}
         </>
      );
   };

   return <>{<GetAll />}</>;
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
