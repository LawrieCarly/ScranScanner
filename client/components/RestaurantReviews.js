import React, {useState} from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';




const RestaurantReviews = ({restaurantById}) => {

    return (

    
        <SafeAreaView>
        <View>
        <Text style={styles.textH3Dark}>Reviews:</Text>
        <View style={{padding: 5}}/>
         {restaurantById.reviews.map((review, index) => { 
            return (
                <View style={styles.textH4} key={review.id} index={review.id} >
                    <Text style={styles.paraDarkBold}>Name:<Text style={styles.paraDark}> {review.customerName}</Text></Text>
                    <Text style={styles.paraDarkBold}>Rating:<Text style={styles.paraDark}> {review.rating}</Text></Text>
                    <Text style={styles.paraDarkBold}>Comment:<Text style={styles.paraDark}> {review.comment}</Text></Text>
                    <View style={styles.pinkUnderLine}/>
                </View>
            )})}

    
        </View>
        </SafeAreaView>

    
    )};


    
    const styles = StyleSheet.create({
        textH2Dark: {
            fontSize: 22,
            textAlign: 'left',
            marginBottom: 5,
            color: '#27233A',
            fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
        },
        textH3Dark: {
            fontSize: 18,
            textAlign: 'left',
            marginBottom: 3,
            color: '#27233A',
            fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
        },
        paraDark: {
            fontSize: 16,
            textAlign: 'left',
            marginBottom: 5,
            color: '#27233A',
            fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',
        },
        paraDarkBold: {
            fontSize: 16,
            textAlign: 'left',
            marginBottom: 5,
            color: '#27233A',
            fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-SemiBold',
        },
        pinkUnderLine : {
            height:1,
            width: 100,
            marginBottom: 20,
            backgroundColor: '#F38599'
        },
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