import React from 'react'
import { View, Text, } from 'react-native';
import City from './City';
function CitiesList({pressedCity}:any) {
  return (
    <View>
      {/* <City pressedCity={pressedCity} city='Bratislava' />
      <City pressedCity={pressedCity} city='Humenné'/>
      <City pressedCity={pressedCity} city='Koromľa'/>
      <City pressedCity={pressedCity} city='Košice'/>
      <City pressedCity={pressedCity} city='Michalovce'/>
      <City pressedCity={pressedCity} city='Sobrance' /> */}
      
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
