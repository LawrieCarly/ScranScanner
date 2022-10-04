// import React, {useState} from 'react';
// import { updateBookingAvailabilityToFalse } from '../services/AvailabilityService';
// import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Image, ScrollView, Alert} from 'react-native';
// import { postBooking } from '../services/BookingService';
// import { useNavigation } from '@react-navigation/native';




// const RestaurantAvailability = ({restaurantById, filteredAvailablitiesOfRestaurant}) => {

//     const navigation = useNavigation();
    
//         const mappedAvailabilityNodes = 
//             filteredAvailablitiesOfRestaurant.map((availability, index) => { 

//                 return (
//                                 <TouchableOpacity
//                                 onPress={ () => {
//                                     Alert.alert(
//                                       `'${restaurantById.displayName}' Confirmation:`,
//                                       `Table for ${availability.id} customers, at ${availability.time} on ${availability.date}`,
    
//                                       [
//                                         {text: 'Book Now', onPress: () => {
                                            
//                                         // POST - 'add booking to customer reservations'
//                                         const bookingObject = {
//                                             "customer": {
//                                                 "id": customerId
//                                             },
//                                             "restaurant": {
//                                                 "id": route.params.restaurantId
//                                             },
//                                             "availability": {
//                                                 "id": availability.id
//                                             },
//                                             "numberOfGuests": route.params.partysize
//                                         }
//                                         postBooking(bookingObject)

//                                         // PUT - 'set booking availability to false'
//                                         const availabilityObject = {
//                                             "id": availability.id,
//                                             "date": availability.date,
//                                             "time": availability.time,
//                                             "dinnerTable": availability.dinnerTable,
//                                             "available": false
//                                         }
//                                         updateBookingAvailabilityToFalse(availabilityObject);


//                                         // NAVIGATE - to reservations page
//                                         navigation.navigate('Notifications')}
//                                         },
        
//                                         {text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel'},
//                                       ],
//                                       { cancelable: true }
//                                     );
//                                 }
                            
//                             }
//                                 >
//                                         <View 
//                                             style={styles.availabilityButton}
//                                         >
//                                         <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.date}</Text>
//                                         <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.time}</Text>
//                                         </View>
//                                 </TouchableOpacity>
                
//                 );
//                 })


//     return (
// <>
//         <SafeAreaView>
//             <ScrollView horizontal={true}>
//                 {mappedAvailabilityNodes}
//             </ScrollView>
//         </SafeAreaView>
//         </>
    
    
//     );}


    
//     const styles = StyleSheet.create({
//         button: {
//             alignItems: 'center',
//             backgroundColor: 'gray',
//             padding: 10,
//             width: 350,
//             marginTop: 16,
//         },
//         button2: {
//             alignItems: 'center',
//             backgroundColor: 'purple',
//             padding: 10,
//             width: 120,
//             marginTop: 16,
//             fontSize: 10,
    
//         },
//         availabilityButton: {
//             alignItems: 'center',
//             backgroundColor: 'red',
//             padding: 10,
//             margin: 10
//         },
//         availabilityText: {
//             fontSize: 16,
//             textAlign: 'center',
//         },
//         review: {
//             fontSize: 16,
//             alignItems: 'flex-start',
//             color: 'black',
//             padding: 10,
//             margin: 10
//         },
//         textH1: {
//             fontSize: 25,
//             textAlign: 'left',
//             marginBottom: 16,
//             color: 'black',
//             paddingTop: 10
//         },
//         textH2: {
//             fontSize: 18,
//             textAlign: 'left',
//             color: 'black',
//             paddingTop: 20,
//             paddingBottom: 10
    
//         },
//         textH3: {
//             fontSize: 16,
//             textAlign: 'left',
//             color: 'black',
//             paddingRight: 30
    
//         },
//         textH4: {
//             fontSize: 16,
//             textAlign: 'center',
//             color: 'black',
//             paddingRight: 10
    
//         },
//         mainView: {
//             flex: 1,
//             alignItems: 'flex-start',
//             justifyContent: 'flex-start',
//         }
//         });

    
    
// export default RestaurantAvailability;