import React, {useState} from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import RestaurantPreviewSmall from '../components/RestaurantPreviewSmall';

const logo1 = {
  uri: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1878&q=80',
  width: 140,
  height: 100

};
const logo2 = {
  uri: 'https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  width: 140,
  height: 100

};



const FilteredRestaurants = ({ navigation }) => (
  <>
  <View >
      <ScrollView>
        <Text style={{ fontSize: 20, color: 'black', paddingBottom: 20}}>
          [Filter Value] Restaurants
        </Text>
        <View style={{flex: 2}}>
          
          <ScrollView horizontal={true}>

              <RestaurantPreviewSmall/>
              <RestaurantPreviewSmall/>
              <RestaurantPreviewSmall/>
              <RestaurantPreviewSmall/>


          </ScrollView>
        </View>
    </ScrollView>
  </View>

</>
);


export default FilteredRestaurants;



