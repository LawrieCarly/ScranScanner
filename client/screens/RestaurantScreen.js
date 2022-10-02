import React, {useEffect, useState} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Image, ScrollView, Alert} from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';

import { getRestaurantById, getFilteredAvailablitiesOfRestaurant } from '../services/RestaurantService';


const logo2 = {
    uri: 'https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    width: 350,
    height: 250
};


const RestaurantScreen = ({ navigation, route }) => {

    const IsFocused = useIsFocused();
    
    const [restaurantById, setRestaurantById ] = useState({});
    const [filteredAvailablitiesOfRestaurant, setFilteredAvailablitiesOfRestaurant ] = useState([]);
    const [availabilityNodes, setAvailabilityNodes] = useState([]);
    

    // useEffect #1 - uses route params id passed from search screen to get RestaurantById
    useEffect( () => {
        getRestaurantById(route.params.restaurantId)
        .then(returnedResto => setRestaurantById(returnedResto))
    }, 
    [IsFocused]);


        console.log('====================================');
        console.log(route.params.date, route.params.time);
        console.log('====================================');


    // useEffect #2 - uses search criteria (partysize etc) params passed from search screen get filtered availabilities.


    // useFocusEffect(
    //     React.useCallback(() => {
            
    //     const filteredRestos = getFilteredAvailablitiesOfRestaurant(route.params.restaurantId, route.params.partysize, route.params.date, route.params.time)
    //     .then(returnedAvailabilities => setFilteredAvailablitiesOfRestaurant(returnedAvailabilities))
    
    //       return () => filteredRestos;
    //     }, [restaurantById])

    //     );
        
    //     console.log('====================================');
    //     console.log(filteredAvailablitiesOfRestaurant);
    //     console.log('====================================');    



    useEffect( () => {
        getFilteredAvailablitiesOfRestaurant(route.params.restaurantId, route.params.partysize, route.params.date, route.params.time)
        .then(returnedAvailabilities => setFilteredAvailablitiesOfRestaurant(returnedAvailabilities))
    }, [IsFocused]);


    // useEffect #3 to map availabilities
    useEffect(() => {
        const effectAvailabilityNodes = 
            filteredAvailablitiesOfRestaurant.map((availability, index) => { 
                return (
                                <TouchableOpacity
                                // could use Modals for confirmation on this instead if time: https://reactnative.dev/docs/0.66/modal
                                onPress={ () => {
                                    Alert.alert(
                                      `'${restaurantById.displayName}' Confirmation:`,
                                      `Table for ${route.params.partysize} customers, at ${availability.time} on ${availability.date}`,
    
                                      [
                                        {text: 'Book Now', onPress: () => 
                                        //  PUT 'set booking availability to false'
                                        //  POST 'add to customer reservations'
                                        // POST 'add to resto bookings?'
                                        
                                        navigation.navigate('Notifications')},
    
                                        console.log('booked'),
    
                                        {text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel'},
                                      ],
                                      { 
                                        cancelable: true 
                                      }
                                    );
                                }
                            
                            }
                                >
                                        <View 
                                            style={styles.availabilityButton}
                                        >
                                        <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.date}</Text>
                                        <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.time}</Text>
                                        </View>
                                </TouchableOpacity>
                
                );
                })
                setAvailabilityNodes(effectAvailabilityNodes)
    
                // ISSUE WITH RE-RENDERING NEW FILTERED AVAILABILITY - SOMETIMES STAYS THE SAME OR ADDS BOTH DATES - NEEDS SOMETHING USEEFFECT-Y?
                }, [
                    // IsFocused
                    filteredAvailablitiesOfRestaurant
                ]);
    





    // COPY OF #2 useEFFECT
    // useEffect(() => {
    // const effectAvailabilityNodes = 
    //     filteredAvailablitiesOfRestaurant.map((availability, index) => { 
    //         return (
    //                         <TouchableOpacity
    //                         // could use Modals for confirmation on this instead if time: https://reactnative.dev/docs/0.66/modal
    //                         onPress={ () => {
    //                             Alert.alert(
    //                               `'${restaurantById.displayName}' Confirmation:`,
    //                               `Table for ${route.params.partysize} customers, at ${availability.time} on ${availability.date}`,

    //                               [
    //                                 {text: 'Book Now', onPress: () => 
    //                                 //  PUT 'set booking availability to false'
    //                                 //  POST 'add to customer reservations'
    //                                 // POST 'add to resto bookings?'
                                    
    //                                 navigation.navigate('Notifications')},

    //                                 console.log('booked'),

    //                                 {text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel'},
    //                               ],
    //                               { 
    //                                 cancelable: true 
    //                               }
    //                             );
    //                         }
                        
    //                     }
    //                         >
    //                                 <View 
    //                                     style={styles.availabilityButton}
    //                                 >
    //                                 <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.date}</Text>
    //                                 <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.time}</Text>
    //                                 </View>
    //                         </TouchableOpacity>
            
    //         );
    //         })
    //         setAvailabilityNodes(effectAvailabilityNodes)

    //         // ISSUE WITH RE-RENDERING NEW FILTERED AVAILABILITY - SOMETIMES STAYS THE SAME OR ADDS BOTH DATES - NEEDS SOMETHING USEEFFECT-Y?
    //         }, [
    //             // IsFocused
    //             filteredAvailablitiesOfRestaurant
    //         ]);

            // console.log('====================================');
            // console.log(availabilityNodes);
        
            console.log('====================================');

        
    //  REVIEWS MAP - SOMETIMES WORKS BUT NEED TO SOLVE SAME ISSUES WITH STATE UPDATING

    // const restaurantReviews = 
    //     restaurantById.reviews.map((review, index) => { 
    //         return (
    //             <View style={styles.textH4} key={review.id} index={review.id} >
    //                 <Text> Name: {review.customerName}</Text>
    //                 <Text> Rating: {review.rating}</Text>
    //                 <Text> Comment: {review.comment} </Text>
    //                 <Text> =======</Text>
    //             </View>
    //         )});

                        


    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                
            <Text style={styles.textH1}>{restaurantById["displayName"]} - db: ID={route.params.restaurantId}</Text>

                <View style={styles.mainView}>
                <ScrollView>

                    <Image style={{paddingBottom: 50}} source={logo2}/>
                    <TouchableOpacity style={styles.button}>
                        <Text>Save Restaurant</Text>
                    </TouchableOpacity>

                    <Text style={styles.textH2}> [LOCATION: 0.4 kilometres away]</Text>
                    {/* <Text style={styles.textH3}> CUISINE: db: 
                    MORE RENDERING ISSUES - strange as it's never affected the resto name
                    {restaurantById.attributes["cuisine"]}
                    </Text> */}
                    <Text style={styles.textH3}> [PRICE: ££]</Text>
                    <Text style={styles.textH3}> [RATING: ⭐️⭐️⭐️⭐️]</Text>
        

                    <Text style={styles.textH1}>Booking Results:</Text>

                    <ScrollView horizontal={true}> 
                        <Text>
                            {availabilityNodes}
                        </Text>
                    </ScrollView>

                    <TouchableOpacity style={styles.button2}>
                        <Text>See more times</Text>
                    </TouchableOpacity>


                    <View>
                        <Text style={styles.textH1}>Reviews:</Text>  
                        {/* <View>
                            {restaurantReviews}
                        </View> */}
                    </View>



                </ScrollView>
                </View>

            </View>

        </SafeAreaView>


    );
    }


    
    const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: 10,
        width: 350,
        marginTop: 16,
    },
    button2: {
        alignItems: 'center',
        backgroundColor: 'purple',
        padding: 10,
        width: 120,
        marginTop: 16,
        fontSize: 10,

    },
    availabilityButton: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        margin: 10
    },
    availabilityText: {
        fontSize: 16,
        textAlign: 'center',
    },
    review: {
        fontSize: 16,
        alignItems: 'flex-start',
        color: 'black',
        padding: 10,
        margin: 10
    },
    textH1: {
        fontSize: 25,
        textAlign: 'left',
        marginBottom: 16,
        color: 'black',
        paddingTop: 10
    },
    textH2: {
        fontSize: 18,
        textAlign: 'left',
        color: 'black',
        paddingTop: 20,
        paddingBottom: 10

    },
    textH3: {
        fontSize: 16,
        textAlign: 'left',
        color: 'black',
        paddingRight: 30

    },
    textH4: {
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
        paddingRight: 10

    },
    mainView: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
    });
export default RestaurantScreen;