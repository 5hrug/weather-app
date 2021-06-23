import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DetailItem from './DetailItem';
import { Context } from '../../Context';

const convertUnix = (
   unix_timestamp: number,
   timezone: number,
   daytime?: boolean
) => {
   const date = new Date(unix_timestamp * 1e3);
   console.log(date);
   const actualHours = date.getHours() + timezone / 3600;
   const hours = actualHours > 12 ? actualHours - 12 : actualHours;
   const minutes = '0' + date.getMinutes();
   if (daytime) return `${hours}h ${minutes}m`;
   else return hours + ':' + minutes.substr(-2);
};

function DetailsList() {
   const { data } = useContext(Context);

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
                        value={convertUnix(data.sys.sunrise, data.timezone)}
                        scale='AM'
                     />
                     <DetailItem
                        icon={require('../../../../assets/sunset.png')}
                        term='Sunset'
                        value={convertUnix(data.sys.sunset, data.timezone)}
                        scale='PM'
                     />
                     <DetailItem
                        icon={require('../../../../assets/daytime.png')}
                        term='Daytime'
                        value={convertUnix(data.dt, data.timezone, true)}
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
      height: 100,
      flexDirection: 'row',
      marginHorizontal: '3%',

   },
});

export default DetailsList;
