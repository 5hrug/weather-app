import React, { useContext } from 'react';
import { Context } from '../../Context';
import { View, Text, StyleSheet,Image } from 'react-native';
import { useFonts, Barlow_500Medium } from '@expo-google-fonts/barlow';
interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}
function ItemToday(props: Props) {
   const { data } = useContext(Context);
   let [fontsLoaded] = useFonts({
      Barlow_500Medium,
   });

   return (
      <>
         {fontsLoaded && data && (
            <View style={styles.container}>
               <Image style={styles.icon} source={require('../../../../assets/sunny.png')} />
               {/* <Text style={styles.icon}>icon</Text> */}
               <Text style={styles.weather}>{data.weather[0].main}</Text>
            </View>
         )}
      </>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   weather: {
      fontFamily: 'Barlow_500Medium',
      fontSize: 18,
   },
   icon: {
      height: 30,
      width: 40,
   },
});
export default ItemToday;
