import React, { useContext } from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { Context } from '../../Utils/Context';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HeaderLocation() {
   const { pressHandler, pressedCity } = useContext(Context);

   return (
      <TouchableOpacity style={styles.container} onPress={pressHandler}>
         <>
            <Text style={styles.locationText}>{pressedCity}, Slovakia</Text>
            <Image
               style={styles.icon}
               source={require('../../../../assets/location.png')}
            />
         </>
      </TouchableOpacity>
   );
}
const styles = StyleSheet.create({
   container: {
      backgroundColor: 'rgba(13, 159, 234, 0.08)',
      alignItems: 'center',
      borderBottomLeftRadius: 30,
      borderTopRightRadius: 30,
      flexDirection: 'row',
      height: 48,
      width: '100%'
   },

   icon: {
      marginLeft: 3,
      marginRight: 10,
      width: 13,
      height: 13,
   },
   locationText: {
      color: '#0DA0EA',
      fontSize: 16,
      marginLeft: 6,
      flexWrap: 'wrap',
   },
});
export default HeaderLocation;
