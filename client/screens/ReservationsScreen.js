import React, {useState, useEffect} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Image, ScrollView, Alert} from 'react-native';
import RestaurantPreviewSmall from '../components/RestaurantPreviewSmall';
import FilteredRestaurants from '../containers/FilteredRestaurants';
import { useIsFocused } from '@react-navigation/native';
import { getCustomerById } from '../services/CustomerService';
import deleteBooking from '../components/DeleteBooking';
import { deleteBookingMethod } from '../services/BookingService';


const ReservationsScreen = ({navigation}) => {

    const id = "1"

    const [customer, setCustomer] = useState({ bookings: [] });
    const [selectedBooking, setSelectedBooking] = useState(null);
    const IsFocused = useIsFocused();

    useEffect(() => {
        getCustomerById(id)
            .then(returnedCustomer => setCustomer(returnedCustomer))
        }, [IsFocused]);

        // console.log("customerView", customer)
        // console.log("booking name", customer.bookings)

        const onDeleteClick = function(booking) {
            // delete booking from customer
            setSelectedBooking(booking)
            deleteBookingMethod(booking)
            // refresh page
        }

        const bookingNodes = customer.bookings.map((booking, index) => {
            return(
                <View>
                    <Text>{booking.restaurant.displayName}</Text>
                    <deleteBooking booking={booking} onDeleteClick={onDeleteClick()}/>
                </View>
            )

        })

        // console.log("Customer bookings", bookingNodes)
        

    return(
        <View>
            <Text>Text</Text>
            <Text>{customer.displayName}</Text>
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