import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DetailItem from './DetailItem';

function DetailsList() {
   return (
      <View style={styles.container}>
         <DetailItem />
         <DetailItem />
         <DetailItem />
      </View>
   );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 101,
    width: '100%',

    flexDirection: 'row',
   //  justifyContent: 'space-around',
   //    alignSelf: 'center',
   //  marginLeft:100,
    // alignItems:'flex-end'
  },

})

export default DetailsList;
