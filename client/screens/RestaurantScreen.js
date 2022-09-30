import React, {useEffect, useState} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Image} from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getRestaurantById } from '../services/SearchService';




const logo2 = {
    uri: 'https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    width: '100%'  
};


const RestaurantScreen = ({ navigation, route }) => {
    
    const [restaurantById, setRestaurantById ] = useState({})
    const IsFocused = useIsFocused();

    useEffect( () => {
        getRestaurantById(route.params.restaurantId)
        .then(returnedResto => setRestaurantById(returnedResto))
        }, [IsFocused]);

    // useEffect(async () => {
    //     await getRestaurantById(route.params.restaurantId)
    //         .then(returnedResto => {
    //             console.log("resto returned",returnedResto)
    //             setRestaurantById(returnedResto)
    //             console.log("resto state: ", restaurantById)
    //         }
    //             );
    // }, [IsFocused]);

    // useEffect(() => {
    //     async function fetchData() {
    //       // You can await here
    //       const response = await MyAPI.getData(someId);
    //       // ...
    //     }
    //     fetchData();
    //   }, [someId]); // Or [] if effect doesn't need props or state
    

    // console.log(route.params.restaurantId);
    console.log(restaurantById);


    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
            
            <View style={styles.mainView}>
                <Text style={styles.textH1}>{route.params.restaurantId}{restaurantById["displayName"]}</Text>
                <Image source={logo2}/>
                <Text style={styles.textH2}>Details</Text>
                <Text style={styles.textH2}>Details</Text>
                <Text style={styles.textH2}>Details</Text>
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