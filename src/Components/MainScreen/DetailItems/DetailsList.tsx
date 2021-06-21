import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DetailItem from './DetailItem';

function DetailsList({
   firstIcon,
   secondIcon,
   thirdIcon,
   firstName,
   secondName,
   thirdName,
}: any) {
   return (
      <View style={styles.container}>
         <DetailItem icon={firstIcon} term={firstName} />
         <DetailItem icon={secondIcon} term={secondName} />
         <DetailItem icon={thirdIcon} term={thirdName} />
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
});

export default DetailsList;
