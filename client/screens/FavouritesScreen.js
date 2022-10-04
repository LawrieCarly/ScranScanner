import React, {useEffect, useState, useContext} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView} from 'react-native';
import RestaurantPreviewWide from '../components/RestaurantPreviewWide';
import FilteredRestaurants from '../containers/FilteredRestaurants';
import { useIsFocused } from '@react-navigation/native';
import { getCustomerById } from '../services/CustomerService';
import AppContext from '../components/AppContext';



const FavouritesScreen = ({ navigation }) => {

    const context = useContext(AppContext)

    const [customer, setCustomer] = useState({ savedRestaurants: [] })
    const IsFocused = useIsFocused();

    useEffect(() => {
        getCustomerById(context.customerId)
            .then(returnedCustomer => setCustomer(returnedCustomer))
        }, [IsFocused]);

        // console.log("customerView", customer)
        // console.log("booking name", customer.savedRestaurants)


        // const savedRestoNodes = customer.savedRestaurants.map((savedRestaurant, index) => {
        //     return(

        //             <View>
        //                 <Text>{savedRestaurant.displayName}</Text>
        //             </View>
        //     )

        // })

        // console.log("Customer bookings", bookingNodes)


    return(

        <SafeAreaView>
            {customer?

            <View>
                <Text>Text</Text>
                <Text>{customer.displayName}</Text>
                {/* {bookingNodes} */}
                {/* {savedRestoNodes}  */}
            {savedRestoNodes = customer.savedRestaurants.map((savedRestaurant, index) => {
            return(

                    <View>
                        <Text>{savedRestaurant.displayName}</Text>
                    </View>
                    )
                })}
                
            </View>
            :
            <Text>Loading</Text>
            }
        {/* 
        </SafeAreaView>
        <SafeAreaView>
        <View>
            <View>
                <Text>{customer.displayName}</Text>
                <Text>Places to try and those you already love:</Text>
            </View>
        </View> */}

    </SafeAreaView> 
    )


    // ? CODE TO START WITH ==========================


    // return (
    //     <SafeAreaView style={{ flex: 1 }}>
    //     <View style={{ flex: 1, padding: 16 }}>
    //         <View style={styles.mainView}>
    //             <Text style={styles.textH1}>Places to try and those you already love:</Text>
    //         </View>
    //         <View style={{ flex: 3, padding: 16 }}>
    //             <RestaurantPreviewWide/>
    //             <RestaurantPreviewWide/>
    //         </View>

    //     </View>
    //     </SafeAreaView>


    // );

    // ? CODE TO START WITH ==========================

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
export default FavouritesScreen;