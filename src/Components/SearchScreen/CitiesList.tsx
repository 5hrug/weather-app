import React from 'react'
import { View, Text, } from 'react-native';
import City from './City';
function CitiesList({pressedCity}:any) {
  return (
    <View>
      <City  city='Bratislava' />
      <City  city='Humenné'/>
      <City  city='Koromľa'/>
      <City  city='Košice'/>
      <City  city='Michalovce'/>
      <City  city='Sobrance'/>
    </View>
  )
}

export default CitiesList
