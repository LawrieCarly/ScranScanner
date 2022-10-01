import React, {useEffect, useState} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Image, ScrollView} from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
    

    useEffect( () => {
        getRestaurantById(route.params.restaurantId)
        .then(returnedResto => setRestaurantById(returnedResto))
    }, 
    [IsFocused]);


    // Attempt#1 for useEffect

    useEffect( () => {
        getFilteredAvailablitiesOfRestaurant(route.params.restaurantId, route.params.partysize, route.params.date, route.params.time)
        .then(returnedAvailabilities => setFilteredAvailablitiesOfRestaurant(returnedAvailabilities))
    }, [restaurantById]);
    
    // console.log('====================================');
    // console.log(filteredAvailablitiesOfRestaurant);
    // console.log('====================================');
    

    // const availabilitiesMappingFunction = () => {
    //     const effectAvailabilityNodes = 
    //         filteredAvailablitiesOfRestaurant.map((availability, index) => { 
    //             return (
    //                             <TouchableOpacity
    //                             // onPress={() => TRIGGER BOOKING }
    //                             >
    //                                     <View 
    //                                     >
    //                                     <Text style={styles.textH4} key={availability.id} index={availability.id} >{availability.date}</Text>
    //                                     <Text style={styles.textH4} key={availability.id} index={availability.id} >{availability.time}</Text>
    //                                     </View>
    //                             </TouchableOpacity>
                
    //             );
    //             })
    //             setAvailabilityNodes(effectAvailabilityNodes)    
    //         }

    // 2nd useEffect maps availabilities only once FilteredAvailablitiesOfRestaurant has been returned
    useEffect(() => {
    const effectAvailabilityNodes = 
        filteredAvailablitiesOfRestaurant.map((availability, index) => { 
            return (
                            <TouchableOpacity
                            // onPress={() => TRIGGER BOOKING }
                            >
                                    <View 
                                        style={styles.availability}
                                    >
                                    <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.date}</Text>
                                    <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.time}</Text>
                                    </View>
                            </TouchableOpacity>
            
            );
            })
            setAvailabilityNodes(effectAvailabilityNodes)
                
            }, [
                // IsFocused
                filteredAvailablitiesOfRestaurant
            ]);

// COPY

        // useEffect(() => {
        //     const effectAvailabilityNodes = 
        //         filteredAvailablitiesOfRestaurant.map((availability, index) => { 
        //             return (
        //                             <TouchableOpacity
        //                             // onPress={() => TRIGGER BOOKING }
        //                             >
        //                                     <View 
        //                                     >
        //                                     <Text style={styles.textH4} key={availability.id} index={availability.id} >{availability.date}</Text>
        //                                     <Text style={styles.textH4} key={availability.id} index={availability.id} >{availability.time}</Text>
        //                                     </View>
        //                             </TouchableOpacity>
                    
        //             );
        //             })
        //             setAvailabilityNodes(effectAvailabilityNodes)
                        
        //             // POTENTIAL ISSUE WITH RE-LOADING AND DISPLAYING CORRECT DATA
        
        //             }, [
        //                 // IsFocused
        //                 filteredAvailablitiesOfRestaurant
        //             ]);
            
            
            console.log('================= FILTERED AVAILS===================');
            console.log(availabilityNodes);
            console.log('====================================');


    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                
            <Text style={styles.textH1}>{restaurantById["displayName"]} - db ID: {route.params.restaurantId}</Text>

                <View style={styles.mainView}>
                    <Image style={{paddingBottom: 50}} source={logo2}/>
                    <TouchableOpacity style={styles.button}>
                        <Text>Save Restaurant</Text>
                    </TouchableOpacity>

                    <Text style={styles.textH2}> Details</Text>
                    <Text style={styles.textH3}> [LOCATION]</Text>
                    <Text style={styles.textH3}> [CUISINE]</Text>
                    <Text style={styles.textH3}> [PRICE-RANGE]</Text>
        

                    <Text style={styles.textH1}>Searched Availabilities:</Text>

                    <ScrollView horizontal={true}> 
                        <Text>
                            {availabilityNodes}
                        </Text>
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
    availability: {
        alignItems: 'center',
        backgroundColor: 'red',
        margin: 50
    },
    availabilityText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
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
        textAlign: 'center',
        color: 'black',
        paddingTop: 10

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