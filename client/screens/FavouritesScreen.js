import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet,View,Text,SafeAreaView, Image, ScrollView} from 'react-native';
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
  
    return(

        <SafeAreaView>
            {customer?

            <View>
                <Text style={styles.textH2Dark}>{customer.displayName}'s saved restaurants</Text>
                {/* {bookingNodes} */}
                {/* {savedRestoNodes}  */}
            <ScrollView>
            {savedRestoNodes = customer.savedRestaurants.map((savedRestaurant, index) => {
            const RestoImage = {
                uri: savedRestaurant.imageURL,
                width: 350,
                height: 200
            }; 
            return(

                    <View style={styles.map}>
                        <Image source={RestoImage}/>
                        <Text style={styles.textH3Dark} >{savedRestaurant.displayName}</Text>
                        <Text style={styles.paraDark}>{savedRestaurant.description}</Text>
                        <View style={styles.pinkUnderLine}/>
                    </View>
                    )
                })}
            </ScrollView>
            </View>
            :
            <Text style={styles.baseText}>Loading<Text style={styles.innerText}>...</Text></Text>
            }

    </SafeAreaView> 
    )


    }
    
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
    textH2Dark: {
        fontSize: 22,
        textAlign: 'left',
        margin: 20,
        marginBottom: 5,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    map: {
        margin: 20,
    },
    pinkUnderLine : {
        height:1,
        width: 100,
        marginTop: 10,
        backgroundColor: '#F38599'
    },
    mainView: {
        margin: 20,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    textH3Dark: {
        fontSize: 18,
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 3,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    paraDark: {
        fontSize: 16,
        width: 250,
        flexWrap: 'wrap',
        textAlign: 'left',
        marginBottom: 5,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',
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