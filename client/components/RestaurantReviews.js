import React, {useState} from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';




const RestaurantReviews = ({restaurantById}) => {

    const logo2 = {
        uri: `${restaurantById.imageurl}`,
        // uri: 'https://images.unsplash.com/photo-1649138783888-0ec9c3ec2f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        width: 350,
        height: 200
    };

    console.log('restaurantById  ====================================');
    console.log(restaurantById);
    console.log('restaurantById REVIEWS====================================');
    console.log(restaurantById.reviews);

    return (

    
        <SafeAreaView>
        <View>
        
        <Text style={styles.textH3}>
            REVIEW COMPONENT PLACEHOLDER
         {restaurantById.reviews.map((review, index) => { 
            return (
                <View style={styles.textH4} key={review.id} index={review.id} >
                    <Text> Name: {review.customerName}</Text>
                    <Text> Rating: {review.rating}</Text>
                    <Text> Comment: {review.comment} </Text>
                </View>
            )})}
        </Text>

    
        </View>
        </SafeAreaView>

    
    )};


    
    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            backgroundColor: 'gray',
            padding: 10,
            width: 350,
            marginTop: 16,
        },
        button2: {
            alignItems: 'center',
            backgroundColor: 'purple',
            padding: 10,
            width: 120,
            marginTop: 16,
            fontSize: 10,
    
        },
        availabilityButton: {
            alignItems: 'center',
            backgroundColor: 'red',
            padding: 10,
            margin: 10
        },
        availabilityText: {
            fontSize: 16,
            textAlign: 'center',
        },
        review: {
            fontSize: 16,
            alignItems: 'flex-start',
            color: 'black',
            padding: 10,
            margin: 10
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
            textAlign: 'left',
            color: 'black',
            paddingTop: 20,
            paddingBottom: 10
    
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


    

export default RestaurantReviews;