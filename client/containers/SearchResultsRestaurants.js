import React, {useState} from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import RestaurantPreview from '../components/RestaurantPreview';


const logo2 = {
  uri: 'https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  width: 140,
  height: 100

};



const SearchResultsRestaurants = ({ navigation }) => (
  <>
  <View >
      <ScrollView>

        <View style={{flex: 2}}>
          
          <ScrollView>

              <RestaurantPreview/>
              <RestaurantPreview/>
              <RestaurantPreview/>
              <RestaurantPreview/>


          </ScrollView>
        </View>
    </ScrollView>
  </View>

</>
);


export default SearchResultsRestaurants;



