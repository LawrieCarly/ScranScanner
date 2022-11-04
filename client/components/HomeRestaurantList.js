import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import HomeRestaurantItem from './HomeRestaurantItem';


const 
HomeRestaurantList = ({restaurants, preset_datetime}) => {

  const restaurantNodes = restaurants.map((restaurant, index) => { 
    return ( 
      <HomeRestaurantItem
        key={index}
        preset_datetime={preset_datetime}
        restaurant={restaurant}
      />
    )
  })


  return (
  <>
        <ScrollView horizontal={true}>
          {restaurantNodes}
        </ScrollView>
</>

)};



export default HomeRestaurantList;
