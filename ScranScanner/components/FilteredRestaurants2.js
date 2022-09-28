import React, {useState} from 'react';
import { Image, ScrollView, Text, View, StyleSheet} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 140,
  height: 100

};



const FilteredRestaurants2 = ({ navigation }) => (
  <>
  <View >
      <ScrollView>
        <Text style={{ fontSize: 20, color: 'black', paddingTop: 20}}>
          Filtered Restaurants 2
        </Text>
        <View style={{flex: 2}}>
          <ScrollView horizontal={true}>
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
          </ScrollView>
        </View>
    </ScrollView>
  </View>

</>
);


export default FilteredRestaurants2;



