import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import PeakOfTheDay from './PeakDegree';
import { Context } from '../../../Utils/Context';

function PeakList() {
   const { data } = useContext(Context);

   return (
      <>
         {data && (
            <View style={styles.container}>
               <PeakOfTheDay
                  arrow={require('../../../../../assets/arrowup.png')}
                  degree={Math.round(data.main.temp_max)}
               />
               <View style={{ height: 12 }}></View>
               <PeakOfTheDay
                  arrow={require('../../../../../assets/arrowdown.png')}
                  degree={Math.round(data.main.temp_min)}
               />
            </View>
         )}
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
   },
});

export default PeakList;
