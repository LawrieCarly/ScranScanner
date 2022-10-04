import React, {useState, useEffect, useContext} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Pressable} from 'react-native';
import RestaurantPreviewSmall from '../components/RestaurantPreviewSmall';
import FilteredRestaurants from '../containers/FilteredRestaurants';
import { useIsFocused } from '@react-navigation/native';
import { getCustomerById } from '../services/CustomerService';
import AppContext from '../components/AppContext';



const ReservationsScreen = ({navigation}) => {

    const id = "37"

    const [customer, setCustomer] = useState({ bookings: [] })
    const IsFocused = useIsFocused();

    useEffect(() => {
        getCustomerById(id)
            .then(returnedCustomer => setCustomer(returnedCustomer))
        }, [IsFocused]);

        // console.log("customerView", customer)
        // console.log("booking name", customer.bookings)


        const bookingNodes = customer.bookings.map((booking, index) => {
            return(
                <View>
                    <Text>{booking.restaurant.displayName}</Text>
                </View>
            )

        })

        // console.log("Customer bookings", bookingNodes)

    const context = useContext(AppContext)

    const handleLogout = () => {
        context.flipLoggedIn();

    }

    return(
        <View>
            <Text>Text</Text>
            <Text>{customer.displayName}</Text>
            <Pressable
                style={styles.button}
                onPress={handleLogout}
                >
                    <Text>Logout</Text>
            </Pressable>
            {bookingNodes}
        </View>
    )

// ? CODE TO START WITH =============================================

    // return (
        
    //     <SafeAreaView style={{ flex: 1 }}>
    //     <View style={{ flex: 1, padding: 16 }}>
    //         <View style={styles.mainView}>
    //             <Text style={styles.textH1}>Here's what you've booked:{customer.displayName}</Text>
    //             <View>
    //             </View>
                

    //         </View>
          
    //         <View style={styles.mainView}>
    //             <RestaurantPreviewSmall/>
    //         </View>


    //     </View>
    //     </SafeAreaView>


    // );
    
    // ? CODE TO START WITH =============================================

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

export default ReservationsScreen;