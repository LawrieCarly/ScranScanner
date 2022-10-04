import React, {useEffect, useState, useContext} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Image, ScrollView, Alert} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { getRestaurantById, getFilteredAvailablitiesOfRestaurant } from '../services/RestaurantService';
import { postBooking } from '../services/BookingService';
import { updateBookingAvailabilityToFalse } from '../services/AvailabilityService';
import RestaurantDetails from '../components/RestaurantDetails';
import RestaurantReviews from '../components/RestaurantReviews';
import RestaurantAvailability from '../components/RestaurantAvailability';
import { useFocusEffect } from '@react-navigation/native';
import AppContext from '../components/AppContext'

const RestaurantScreen = ({ navigation, route }) => {
    const IsFocused = useIsFocused();
    const context = useContext(AppContext)

    
    const [restaurantById, setRestaurantById ] = useState(null);
    const [filteredAvailablitiesOfRestaurant, setFilteredAvailablitiesOfRestaurant ] = useState(null);
    // const [availabilityNodes, setAvailabilityNodes] = useState(null);
    

    //* useEffect #1 - uses route params id passed from search screen to get RestaurantById

    useEffect( () => {
        getRestaurantById(route.params.restaurantId)
        .then(returnedResto => setRestaurantById(returnedResto))
        getFilteredAvailablitiesOfRestaurant(route.params.restaurantId, route.params.partysize, route.params.date, route.params.time)
        .then(returnedAvailabilities => setFilteredAvailablitiesOfRestaurant(returnedAvailabilities))
    }, 
    [IsFocused]);
    
    //* useEffect #2 - 

    // useFocusEffect(
    //     React.useCallback(() => {
    //             getFilteredAvailablitiesOfRestaurant(route.params.restaurantId, route.params.partysize, route.params.date, route.params.time)
    //             .then(returnedAvailabilities => setFilteredAvailablitiesOfRestaurant(returnedAvailabilities))
                            
    //         }, [restaurantById]));
            
    //* Cleanup UseEffect, seems to remove the double dates we were getting, but not sure it works
    
    React.useEffect(() => {
        const cleanState = navigation.addListener('blur', () => {
            setRestaurantById(null),
            setFilteredAvailablitiesOfRestaurant(null)
            });
    
        return cleanState;
    }, [navigation]);
    
    
    //* useEffect #2/3 (COMMENTED OUT) *====================================================================================
    // uses search criteria (partysize etc) params passed from search screen get filtered availabilities.
    
    
    // useFocusEffect(
    //         React.useCallback(() => {
    //                 getFilteredAvailablitiesOfRestaurant(route.params.restaurantId, route.params.partysize, route.params.date, route.params.time)
    //                 .then(returnedAvailabilities => setFilteredAvailablitiesOfRestaurant(returnedAvailabilities))
                                
    //             }, [restaurantById]));
                

                
                // console.log('restaurantById9999====================================');
                // console.log(restaurantById);
                // console.log('filteredAvailablitiesOfRestaurant=================');
                // console.log(filteredAvailablitiesOfRestaurant);
                
                // console.log('====================================');
                
                //* useEffect #3 - maps availabilities in touchable opacity and provides onPress action for booking actions
                
                // useEffect(() => {
                    //     const mappedAvailabilityNodes = 
                    //         filteredAvailablitiesOfRestaurant.map((availability, index) => { 
                        //             return (
                            //                             <TouchableOpacity
                            //                             // could use Modals for confirmation on this instead if time: https://reactnative.dev/docs/0.66/modal
                            //                             onPress={ () => {
                                //                                 Alert.alert(
                                    //                                   `'${restaurantById.displayName}' Confirmation:`,
                                    //                                   `Table for ${route.params.partysize} customers, at ${availability.time} on ${availability.date}`,
    
    //                                   [
    //                                     {text: 'Book Now', onPress: () => {
                                            
    //                                     // POST - 'add booking to customer reservations'
    //                                     const bookingObject = {
    //                                         "customer": {
    //                                             "id": customerId
    //                                         },
    //                                         "restaurant": {
    //                                             "id": route.params.restaurantId
    //                                         },
    //                                         "availability": {
    //                                             "id": availability.id
    //                                         },
    //                                         "numberOfGuests": route.params.partysize
    //                                     }
    //                                     postBooking(bookingObject)
    
    //                                     // PUT - 'set booking availability to false'
    //                                     const availabilityObject = {
        //                                         "id": availability.id,
        //                                         "date": availability.date,
        //                                         "time": availability.time,
        //                                         "dinnerTable": availability.dinnerTable,
        //                                         "available": false
        //                                     }
        //                                     updateBookingAvailabilityToFalse(availabilityObject);


    //                                     // NAVIGATE - to reservations page
    //                                     navigation.navigate('Notifications')}
    //                                     },
        
    //                                     {text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel'},
    //                                   ],
    //                                   { cancelable: true }
    //                                 );
    //                             }
    
    //                         }
    //                             >
    //                                     <View 
    //                                         style={styles.availabilityButton}
    //                                     >
    //                                     <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.date}</Text>
    //                                     <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.time}</Text>
    //                                     </View>
    //                             </TouchableOpacity>
    
    //             );
    //             })
    //             setAvailabilityNodes(mappedAvailabilityNodes)
    
    //             }, [filteredAvailablitiesOfRestaurant]);
    

    return (
        
        <SafeAreaView style={{ flex: 1 }}>
    
        
    {restaurantById 
    && filteredAvailablitiesOfRestaurant
    // && availabilityNodes 
    ? 
    
    
    <View style={{ flex: 1, padding: 16 }}>
        
        <Text style={styles.textH1}>{restaurantById["displayName"]}</Text>
            
            <View style={styles.mainView}>
                    
                    <ScrollView>
                    
                    <RestaurantDetails restaurantById={restaurantById}/>

                    <Text style={styles.textH1}>Your Booking Options:</Text>
                    
                    {/* <RestaurantAvailability restaurantById={restaurantById} filteredAvailablitiesOfRestaurant={filteredAvailablitiesOfRestaurant}/> */}
                        
                    <ScrollView horizontal={true}>
                            
                            {/* COLLAPSED 'AVAILABILITY MAP' FOR EASE OF READING 
                            - tried as a component but it was dependent on too many things being passed down (eg payload for POST) 
                            - also tried availabilityNodes in a useEffect above
                            */}
                            {filteredAvailablitiesOfRestaurant.map((availability, index) => { 
                                return (
                                    <TouchableOpacity key={availability.id} index={availability.id}
                                    // could use Modals for confirmation on this instead if time: https://reactnative.dev/docs/0.66/modal
                                    onPress={ () => {
                                        Alert.alert(
                                        `'${restaurantById.displayName}' Confirmation:`,
                                        `Table for ${route.params.partysize} customers, at ${availability.time} on ${availability.date}`,
        
                                        [
                                            {text: 'Book Now', onPress: () => {
                                                
                                            // POST - 'add booking to customer reservations'
                                            const bookingObject = {
                                                "customer": {
                                                    "id": context.customerId
                                                },
                                                "restaurant": {
                                                    "id": route.params.restaurantId
                                                },
                                                "availability": {
                                                    "id": availability.id
                                                },
                                                "numberOfGuests": route.params.partysize
                                            }
                                            postBooking(bookingObject)

                                            // PUT - 'set booking availability to false'
                                            const availabilityObject = {
                                                "id": availability.id,
                                                "date": availability.date,
                                                "time": availability.time,
                                                "dinnerTable": availability.dinnerTable,
                                                "available": false
                                            }
                                            updateBookingAvailabilityToFalse(availabilityObject);


                                            // NAVIGATE - to reservations page
                                            navigation.navigate('Notifications')}
                                            },
            
                                            {text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel'},
                                        ],
                                        { cancelable: true }
                                        );}}>
                                            <View style={styles.availabilityButton}>
                                                <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.date}</Text>
                                                <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.time}</Text>
                                            </View>
                                    </TouchableOpacity>
                    
                                    );
                            })}

                            {/* {availabilityNodes}  */}

                    </ScrollView>
                  

                    <TouchableOpacity style={styles.button2}>
                        <Text>See all times</Text>
                    </TouchableOpacity> 
 

                    <View>
                        <Text style={styles.textH1}>Reviews:</Text> 
                        <RestaurantReviews restaurantById={restaurantById}/>
                    </View>



                </ScrollView>
                </View>

        </View>
        
        
        :
        <Text style={styles.textLoading}>Loading ... </Text> 
        }
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
    textLoading: {
        fontSize: 55,
        textAlign: 'center',
        marginBottom: 16,
        color: 'black',
        paddingTop: 50
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