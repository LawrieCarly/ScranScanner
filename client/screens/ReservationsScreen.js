import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image, ScrollView, Alert, LogBox } from 'react-native';
import RestaurantPreviewSmall from '../components/RestaurantPreviewSmall';
import FilteredRestaurants from '../containers/FilteredRestaurants';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { getCustomerById } from '../services/CustomerService';
import DeleteBooking from '../components/DeleteBooking';
import { deleteBookingMethod } from '../services/BookingService';
import { getBookingsByCustomer } from '../services/BookingService';
import AppContext from '../components/AppContext';


const ReservationsScreen = ({ navigation }) => {

    const context = useContext(AppContext)


    const [customer, setCustomer] = useState(null);
    // const [isDeleted, setIsDeleted] = useState(false);
    const [bookings, setBookings] = useState(null);
    const IsFocused = useIsFocused();
    // const context = useContext(AppContext)


    useEffect(() => {
        getCustomerById(context.customerId)
            .then(returnedCustomer => setCustomer(returnedCustomer))
    }, [bookings]);

    useEffect(() => {
        getBookingsByCustomer(context.customerId)
            .then(returnedBookings => setBookings(returnedBookings))
    }, [IsFocused]);

    // console.log("booking name", customer.bookings)

    const onDeleteClick = function (booking) {
        // delete booking from customer and unpack it
        const selectedBookingId = booking.id
        deleteBookingMethod(booking, selectedBookingId)
        // refresh page
        updatedBookingList(booking)
    }

    const updatedBookingList = (booking) => {
        const copyBookings = [...bookings]
        copyBookings.splice(booking, 1)
        setBookings(copyBookings)
    }


    // const bookingNodes = customer.bookings.map((booking, index) => {
    //     return(
    //         <View>
    //             <Text>{booking.restaurant.displayName}</Text>
    //             <deleteBooking booking={booking} onDeleteClick={onDeleteClick()}/>
    //         </View>
    //     )
    // })



    // console.log("Customer bookings", bookingNodes)


    return (
        <SafeAreaView>
            {bookings && customer ?

                <View>
                    <Text style={styles.textH1}>{customer.displayName}'s bookings</Text>
                    {/* {bookingNodes} */}
                    {bookings.map((selectedBooking, index) => {
                        return (
                            <View>
                                <Text style={styles.textH2}>{selectedBooking.restaurant.displayName}</Text>
                                <TouchableOpacity style={styles.btnStyle} onPress={() => {
                                    Alert.alert(
                                        "Delete this booking?",
                                        "Click delete if you want to cancel this booking",
                                        [
                                            { text: 'Delete Now', onPress: () => { onDeleteClick(selectedBooking) } },
                                            { text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel' }
                                        ],
                                        { cancelable: true }
                                    );
                                }
                                }>
                                    <Text>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
                :
                <Text>Loading</Text>
            }

        </SafeAreaView>



    )


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
        paddingTop: 30

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
    },
    btnStyle: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 8
    }

});

export default ReservationsScreen;