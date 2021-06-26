import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
   useFonts,
   Barlow_500Medium,
   Barlow_300Light,
   Barlow_200ExtraLight_Italic,
} from '@expo-google-fonts/barlow';
interface Props {
   icon: any;
   term: string;
   value: string;
   scale?: string;
}
function DetailItem({ icon, term, value, scale }: Props) {
   let [fontsLoaded] = useFonts({
      Barlow_500Medium,
      Barlow_300Light,
   });

   return (
      <>
         {fontsLoaded && (
            <View style={styles.container}>
               <Image style={styles.icon} source={icon} />
               <Text style={styles.value}>
                  {value} {scale}
               </Text>
               <Text style={styles.name}>{term}</Text>
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
   value: {
      fontSize: 16,
      fontFamily: 'Barlow_500Medium',
      letterSpacing: -1,
      margin:2,
   },
   name: {
      color: '#999999',
      fontSize: 10,
      fontFamily: 'Barlow_500Medium',
   },
   icon: {
      width: 25,
      height: 25,
   },
});
export default DetailItem;
