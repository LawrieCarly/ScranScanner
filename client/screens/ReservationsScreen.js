import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image, ScrollView, Alert, LogBox } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { getCustomerById } from '../services/CustomerService';
import { deleteBookingMethod } from '../services/BookingService';
import { getBookingsByCustomer } from '../services/BookingService';
import AppContext from '../components/AppContext';
import moment from 'moment';


const ReservationsScreen = ({ navigation }) => {

    const logo2 = {
        uri: 'https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        width: 300,
        height: 150
    };

    const context = useContext(AppContext)


    const [customer, setCustomer] = useState(null);
    // const [isDeleted, setIsDeleted] = useState(false);
    const [bookings, setBookings] = useState(null);
    const IsFocused = useIsFocused();

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
        <SafeAreaView style={styles.mainView}>
            {bookings && customer ?

                <View>
                    <Text style={styles.textH2Dark}>{customer.displayName}'s bookings</Text>
                    {/* {bookingNodes} */}
                    {bookings.map((selectedBooking, index) => {
                        return (
                            <View style={styles.map}>
                                <Image source={logo2}/>
                                <Text style={styles.textH3Dark}>{selectedBooking.restaurant.displayName}</Text>
                                <Text style={styles.baseText}>{moment(selectedBooking.availability.date).format('Do MMM')}<Text style={styles.innerText}> {selectedBooking.availability.time}</Text></Text>
                                <TouchableOpacity style={styles.button} onPress={() => {
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
                                    <Text style={styles.ButtonText}>Cancel Booking</Text>
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

    // const formattedDate = moment(date).format('YYYY-MM-DD')

}
const styles = StyleSheet.create({
    map: {
        marginTop: 20,
    },
    mainView: {
        padding: 40,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    baseText: {
        fontSize: 16,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    innerText: {
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-SemiBold',
    },
    textH3Dark: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 3,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
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
    textH2Dark: {
        fontSize: 22,
        textAlign: 'left',
        marginBottom: 5,
        marginTop: 20,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
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
    button: {
        alignItems: 'center',
        backgroundColor: '#F38599',
        borderRadius: 10,
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    ButtonText: {
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
        fontSize: 15,
        color: '#27233A',
    },

});

export default ReservationsScreen;