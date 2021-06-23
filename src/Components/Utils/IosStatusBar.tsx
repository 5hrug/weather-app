import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';

export const MyStatusBar = (props: any) => (
   <View style={{ backgroundColor: props.backgroundColor }}>
      <SafeAreaView>
         <StatusBar
            translucent
            backgroundColor={props.backgroundColor}
            {...props}
            style={props.textColor}
         />
      </SafeAreaView>
   </View>
);

export default MyStatusBar;
 