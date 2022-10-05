import React, {useState, useContext} from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Alert} from 'react-native';
import AppContext from './AppContext'
import { addRestaurantToCustomerFavourites } from '../services/CustomerService';



const RestaurantDetails = ({restaurantById}) => {

    const logo = {
        uri: restaurantById.imageURL,
        width: 400,
        height: 200,
        resizeMode: 'cover',
        justifyContent: 'centre'
    };

    // console.log('restaurantById DETAILS====================================');
    // console.log('restaurantById');

    // const cuisineNodes =
    // restaurantById.attributes.cuisine.map((res, index) => { 
    //     return(
    //         <Text style={styles.textH3} id={index} index={index} key={res.id}>{res}</Text>
    //         );})


     // Gives us access to global context which contains customerId
     const context = useContext(AppContext)

     const handleSavePress = () => {
         addRestaurantToCustomerFavourites(context.customerId, restaurantById.id)
         Alert.alert(
             "added to your favourites"
         )
         
     }

    return (

        
        <SafeAreaView style={styles.restaurantDetails}>

        { restaurantById ?
        
            <View>
                <Image source={logo}/>
            
                <View style={styles.RestoPage}>
        
                    <View>
                        <Text style={styles.textH1Dark}>{restaurantById.displayName}</Text>
                        <View style={styles.pinkUnderLine}/>
                        <Text style={styles.paraDark}>{restaurantById.description}</Text>
                        <TouchableOpacity 
                        style={styles.button}
                        onPress={handleSavePress}>
                            <Text style={styles.buttonText}>Save Restaurant...</Text>
                    </TouchableOpacity>
                        <View/>
                            <Text style={styles.textH3Dark}>Cuisine: </Text >
                            {restaurantById.attributes.cuisine.map((res, index) => { 
                                return(
                                    <Text style={styles.paraSmallDark} id={index} index={index} key={res.id}>{res}</Text>
                                    );})}
                        </View>
{/* 
                    <Text style={styles.textH3Dark}>Price: {restaurantById.attributes.price}</Text>                    
                    <Text style={styles.textH3Dark}>Rating: ⭐️⭐️⭐️⭐️</Text> */}
                    
                </View>
                
    
        </View>

        :
        <Text style={styles.textLoading}>Loading ... </Text> 
        }

        </SafeAreaView>

        
        )};


    
    const styles = StyleSheet.create({
        pinkUnderLine : {
            height:1,
            width: 100,
            marginBottom: 20,
            backgroundColor: '#F38599'
        },
        textH1Dark: {
            fontSize: 28,
            textAlign: 'left',
            marginTop: 20,
            marginBottom: 5,
            color: '#27233A',
            fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
        },
        textH3Dark: {
            fontSize: 18,
            textAlign: 'left',
            marginTop: 20,
            marginBottom: 5,
            color: '#27233A',
            fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
        },
        paraSmallDark: {
            fontSize: 12,
            textAlign: 'left',
            marginBottom: 5,
            color: '#27233A',
            fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',
        },
        paraDark: {
            fontSize: 16,
            textAlign: 'left',
            marginBottom: 5,
            color: '#27233A',
            fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#F38599',
            borderRadius: 10,
            padding: 10,
            width: 300,
            marginTop: 16,
        },
        buttonText: {
            fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
            fontSize: 15,
            color: '#27233A',
        },
        restaurantDetails:{
            alignItems: 'center',
        },
        RestoPage: {
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingRight: 40, 
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


    

export default RestaurantDetails;