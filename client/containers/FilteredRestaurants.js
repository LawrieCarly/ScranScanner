import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';


let current_date = moment().format('YYYY-MM-DD')
let current_time = moment().format('HH:mm')


const FilteredRestaurants = ({restaurants, route}) => {

  const navigation = useNavigation();

const restaurantNodes = restaurants.map((restaurant, index) => { 
  const RestoImage = {
    uri: restaurant.imageURL,
    width: 250,
    height: 150
  };
  return ( 
    <TouchableOpacity key={index} index={index}
    onPress={
      () => navigation.navigate(
        'Restaurant', { 
            restaurantId: restaurant.id, 
            partysize: 2, 
            date: current_date, 
            time: current_time 
        })}
          >


    <View style={styles.homeFilters} horizontal={true}>
      <Image source={RestoImage}/>
      <Text style={styles.textH3Dark}>{restaurant.displayName}</Text>
      <Text style={styles.paraDark}>{restaurant.description}</Text> 
      <View style={styles.pinkUnderLine}/>
    </View>
    </TouchableOpacity>
    );})


  return (
  <>
        <ScrollView horizontal={true}>
          {restaurantNodes}
        </ScrollView>
</>

)};

const styles = StyleSheet.create({
  homeFilters: {
    marginRight: 20,
  },
  pinkUnderLine : {
      height:1,
      width: 100,
      marginTop: 10,
      backgroundColor: '#F38599'
  },
  textH3Dark: {
      fontSize: 18,
      textAlign: 'left',
      marginTop: 10,
      marginBottom: 3,
      color: '#27233A',
      fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
  },
  paraDark: {
      fontSize: 16,
      width: 250,
      flexWrap: 'wrap',
      textAlign: 'left',
      marginBottom: 5,
      color: '#27233A',
      fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',
  },
});

export default FilteredRestaurants;
