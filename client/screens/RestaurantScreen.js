import React, {useEffect, useState} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Image, ScrollView} from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getRestaurantById, getFilteredAvailablitiesOfRestaurant } from '../services/RestaurantService';




const logo2 = {
    uri: 'https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    width: 400,
    height: 300
};


const RestaurantScreen = ({ navigation, route }) => {

    // State for restaurant (check if more details have been added?)
    const IsFocused = useIsFocused();
    
    const [restaurantById, setRestaurantById ] = useState({});
    const [filteredAvailablitiesOfRestaurant, setFilteredAvailablitiesOfRestaurant ] = React.useState([]);
    const [availabilityNodes, setAvailabilityNodes] = React.useState([]);
    
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
    

        // Attempt#3 to mirror nodes from search page


            useEffect(() => {
            const effectAvailabilityNodes = 
                filteredAvailablitiesOfRestaurant.map((availability, index) => { 
                    return (
    
                                    <TouchableOpacity
                                    // onPress={() => TRIGGER BOOKING }
                                    >
                                            <View 
                                            >
                                            <Text style={styles.textH4} key={availability.id} index={index} >{availability.date}</Text>
                                            <Text style={styles.textH4} key={availability.id} index={index} >{availability.time}</Text>
                                            </View>
                                    </TouchableOpacity>
                    
                    );
                    })
                    setAvailabilityNodes(effectAvailabilityNodes)
                
            }, [filteredAvailablitiesOfRestaurant]);
            
            
            // console.log('================= FILTERED AVAILS===================');
            // console.log(availabilityNodes);
            // console.log('====================================');


    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
            
        <Text style={styles.textH1}>{restaurantById["displayName"]} - db ID: {route.params.restaurantId}</Text>

            <View style={styles.mainView}>
                <Image source={logo2}/>
                <Text style={styles.textH3}>Details: partySize: {route.params.partysize} </Text>
                <Text style={styles.textH3}>Details: date: {route.params.date} </Text>
                <Text style={styles.textH3}>Details time: {route.params.time}</Text>
        


                <Text style={styles.textH3}>Booking options:</Text>
                <ScrollView
                horizontal={true}
                >

                    <View>
                        
                        <Text>
                            {availabilityNodes}
                        </Text>
                    </View>

                    {/* <View>
                        {filteredAvailablitiesOfRestaurant.map((availability, index) => { 
                        return ( 
                                <TouchableOpacity
                                // onPress={() => TRIGGER BOOKING }
                                >
                                        <View>
                                        <Text style={styles.textH2} key={availability.id} index={index} >{availability.date}</Text>
                                        <Text style={styles.textH3} key={availability.id} index={index} >{availability.time}</Text>
                                        </View>
                                </TouchableOpacity>
                        );})}
                    </View> */}
                </ScrollView>

            </View>

        </View>

        </SafeAreaView>


    );
    }


    
    const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    textH1: {
        fontSize: 25,
        textAlign: 'left',
        marginBottom: 16,
        color: 'black'
    },
    textH2: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
        paddingTop: 100

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
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
    });
export default RestaurantScreen;