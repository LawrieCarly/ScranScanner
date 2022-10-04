import React, {useState, useContext} from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import AppContext from './AppContext'



const RestaurantDetails = ({restaurantById}) => {

    const logo = {
        uri: restaurantById.imageURL,
        width: 350,
        height: 200
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
     }

    return (

        
        <SafeAreaView>

        { restaurantById ?
         
            <View>
            
            <Image style={{paddingBottom: 50}} source={logo}/>
            
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSavePress}>
                        <Text>Save Restaurant</Text>
                </TouchableOpacity>
    
                <View>
                    <Text style={styles.textH2}>{restaurantById.description}</Text>
                    <View style={{paddingVertical: 10}}/>
                    <Text style={styles.textH2}>Cuisine: </Text >
                    {restaurantById.attributes.cuisine.map((res, index) => { 
                        return(
                            <Text style={styles.textH3} id={index} index={index} key={res.id}>{res}</Text>
                            );})}
                </View>

                <View style={{paddingVertical: 10}}/>

                <Text style={styles.textH3}>Price: {restaurantById.attributes.price}</Text>

                <View style={{paddingVertical: 10}}/>
                
                <Text style={styles.textH3}>Rating: ⭐️⭐️⭐️⭐️</Text>
    
        </View>

        :
        <Text style={styles.textLoading}>Loading ... </Text> 
        }

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


    

export default RestaurantDetails;