import React, {useEffect, useState} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Image, ScrollView} from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getRestaurantById, getFilteredAvailablitiesOfRestaurant } from '../services/RestaurantService';




const logo2 = {
    uri: 'https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    width: '100%'  
};


const RestaurantScreen = ({ navigation, route }) => {

    // State for restaurant (details?)
    
    const [restaurantById, setRestaurantById ] = useState({})
    const IsFocused = useIsFocused();

    useEffect( () => {
        getRestaurantById(route.params.restaurantId)
        .then(returnedResto => setRestaurantById(returnedResto))
        }, [IsFocused]);

    //  State for retreiving filtered bookings from selected resto

    const [filteredAvailablitiesOfRestaurant, setFilteredAvailablitiesOfRestaurant ] = useState({})
    useEffect( () => {
        getFilteredAvailablitiesOfRestaurant(route.params.restaurantId, route.params.partysize, route.params.date, route.params.time)
        .then(returnedAvailabilities => setFilteredAvailablitiesOfRestaurant(returnedAvailabilities))
        }, [getRestaurantById]);


        //     useEffect(() => {
            // const searchNodes = 
            // searchResults.map((searchResult, index) => { 
            //     return (

            //         // Params passed to RestaurantScreen route.
            //         // Moved touchable opacity into searchNodes to make navigate work. Still ned to figure out scroll.

            //         <TouchableOpacity
            //         onPress={
            //             () => navigation.navigate(
            //                 // params are stringified above (not objects)
            //                 'Restaurant', { restaurantId: searchResult.id, partysize: partySize, date: formattedDate, time: formattedTime })}
            //         >
            //         <View>
            //             <Text id={searchResult.id} key={index}>{searchResult.displayName}</Text> 
            //             <Image source={logo2}/>
            //         </View>
            //         </TouchableOpacity>
                
            //     );
            //     })
            //     setSearchNodes(searchNodes)
            //     // console.log(searchNodes);

    }, [searchResults])

    console.log("RESTO AVAILS >>>>>>>>>" + filteredAvailablitiesOfRestaurant);
    // console.log(restaurantById);

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
            
            <View style={styles.mainView}>
                <Text style={styles.textH1}>{route.params.restaurantId}{restaurantById["displayName"]}</Text>
                <Image source={logo2}/>
                <Text style={styles.textH2}>Details: partySize: {route.params.partysize} </Text>
                <Text style={styles.textH2}>Details: date: {route.params.date} </Text>
                <Text style={styles.textH2}>Details time: {route.params.time}</Text>
            </View>
        </View>

        <View >

        <Text style={styles.textH2}>Booking options:</Text>

            <ScrollView>
                <View>
                    {filteredAvailablitiesOfRestaurant.map((availability, index) => { 
                    return ( 
                            <TouchableOpacity
                            // onPress={() => TRIGGER BOOKING }
                            >
                                    <View horizontal={true}>
                                    <Text style={styles.textH2} key={index} index={index} >{availability.date}</Text>
                                    <Text style={styles.textH3} key={index} index={index} >{availability.time}</Text>
                                    </View>
                            </TouchableOpacity>
                    );})}
                </View>
            </ScrollView>

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
        textAlign: 'center',
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
        textAlign: 'center',
        color: 'black'

    },
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
    });
export default RestaurantScreen;