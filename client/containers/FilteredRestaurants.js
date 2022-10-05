import React, {useState} from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import RestaurantPreviewSmall from '../components/RestaurantPreviewSmall';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

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


    let current_date = moment().format('YYYY-MM-DD')
    let current_time = moment().format('HH:mm')




const FilteredRestaurants = ({restaurants, route}) => {

  const navigation = useNavigation();
//   const restaurantNodes = restaurants.map((restaurant, index)=>{
//     return(
//         <RestaurantPreviewSmall
//             key={index}
//             name={restaurant.displayName}
//             index={index}
//         />
//     )
// })



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
        // params are stringified above (not objects)
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
  mainView: {
      margin: 20,
      alignItems: 'center',
      backgroundColor: 'black',
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



  // <View >
  //     <ScrollView>
  //       {/* <Text style={{ fontSize: 20, color: 'black', paddingBottom: 20}}>
  //         [Filter Value] Restaurants
  //       </Text> */}
  //       <View style={{flex: 2}}>
  //         <ScrollView horizontal={true}>


  //             <RestaurantPreviewSmall/>
  //             <RestaurantPreviewSmall/>
  //             <RestaurantPreviewSmall/>
  //             <RestaurantPreviewSmall/>


  //         </ScrollView>
  //       </View>
  //   </ScrollView>
  // </View>
