import React, {useEffect, useState, useContext} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Image, ScrollView, Alert} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { getRestaurantById } from '../services/RestaurantService';
import { getFilteredAvailablitiesOfRestaurant } from '../services/AvailabilityService';
import { postBooking } from '../services/BookingService';
import RestaurantDetails from '../components/RestaurantDetails';
import RestaurantReviews from '../components/RestaurantReviews';
import AppContext from '../components/AppContext'
import logo from '../assets/scranscanner-icon-dark.png'
import moment from 'moment';


const RestaurantScreen = ({ navigation, route }) => {
    const IsFocused = useIsFocused();
    const context = useContext(AppContext)

    
    const [restaurantById, setRestaurantById ] = useState(null);
    const [filteredAvailablitiesOfRestaurant, setFilteredAvailablitiesOfRestaurant ] = useState(null);

    //* useEffect #1 - uses route params id passed from search screen to get RestaurantById

    useEffect(() => {
        getRestaurantById(route.params.restaurantId)
        .then(returnedResto => setRestaurantById(returnedResto))

        // Gets Availability objects based on params input in SearchForm, passed by SearchResultItem
        getFilteredAvailablitiesOfRestaurant(route.params.restaurantId, route.params.partySize, route.params.datetime)
        .then(returnedAvailabilities => setFilteredAvailablitiesOfRestaurant(returnedAvailabilities))

        console.log("avails", filteredAvailablitiesOfRestaurant)
    }, [IsFocused]);
            
    //* Cleanup UseEffect, seems to remove the double dates we were getting, but not sure it works
    
    React.useEffect(() => {
        const cleanState = navigation.addListener('blur', () => {
            setRestaurantById(null),
            setFilteredAvailablitiesOfRestaurant(null)
            });
    
        return cleanState;
    }, [navigation]);
    

    return (

        
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.logoBar}>
            <Image style={styles.logo} source={logo}/>
        </View>
    
        
    {restaurantById 
    && filteredAvailablitiesOfRestaurant
    ? 
    
    <View style={{ flex: 1 }}>
                    
            <View style={styles.mainView}>
                    
                    <ScrollView>                  
                    <RestaurantDetails restaurantById={restaurantById}/>

                    <View style={styles.RestoPage}>
                        <Text style={styles.textH3Dark}>Your Booking Options:</Text>
                        <View style={styles.pinkUnderLine}/>
                        <ScrollView horizontal={true}>
                            
                            {filteredAvailablitiesOfRestaurant.map((availability, index) => { 
                                return (
                                    <TouchableOpacity key={availability.id} index={availability.id}
                                    // could use Modals for confirmation on this instead if time: https://reactnative.dev/docs/0.66/modal
                                    onPress={ () => {
                                        Alert.alert(
                                        `'${restaurantById.displayName}' Confirmation:`,
                                        `Table for ${route.params.partySize} customers, at ${availability.time} on ${availability.date}`,
        
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
                                                "numberOfGuests": route.params.partySize
                                            }
                                            postBooking(bookingObject)

                                            // NAVIGATE - to reservations page
                                            navigation.navigate('Profile')
                                            }
                                            },
            
                                            {text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel'},
                                        ],
                                        { cancelable: true }
                                        );}}>
                                            <View style={styles.availabilityButton}>
                                                <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{moment(availability.date).format("Do MMM")}</Text>
                                                <Text style={styles.availabilityText} key={availability.id} index={availability.id} >{availability.time}</Text>
                                            </View>
                                    </TouchableOpacity>
                    
                                    );
                            })}
                    </ScrollView>

                    </View>                   


                    <View style={styles.RestoPage}>
                        <RestaurantReviews restaurantById={restaurantById}/>
                    </View>
                </ScrollView>
                </View>
        </View>
        
        
        :
        <Text style={styles.baseText}>Loading<Text style={styles.innerText}>...</Text></Text>
        }
        </SafeAreaView>


    );
    }

    // const formattedDate = moment(date).format('YYYY-MM-DD')

    
    const styles = StyleSheet.create({
    baseText: {
        fontSize: 25,
        textAlign: 'center',
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    innerText: {
        color: '#F38599',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    pinkUnderLine : {
        height:1,
        width: 100,
        marginBottom: 20,
        backgroundColor: '#F38599'
    },
    pinkUnderLineSmall : {
        height:1,
        width: 100,
        marginBottom: 5,
        backgroundColor: '#F38599'
    },
    RestoPage: {
        alignItems: 'flex-start',
        marginTop: 15,
        paddingHorizontal: 30,
        paddingRight: 40, 
    },
    paraDark: {
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 5,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',
    },
    logoBar: {
        backgroundColor: 'white', 
        paddingHorizontal: 20, 
        alignItems: 'center',
    },
    logo: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        margin: 10
    },
    availabilityButton: {
        alignItems: 'center',
        backgroundColor: '#27233A',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 7,
        marginHorizontal: 5
    },
    availabilityText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',
    },
    textH3Dark: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 3,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    mainView: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
    });
export default RestaurantScreen;