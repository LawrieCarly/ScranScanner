import React, {useState, useEffect} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, ScrollView, RecyclerViewBackedScrollViewComponent, Image} from 'react-native';
import { SearchForm } from '../components/searchForm';
import FilteredRestaurants from '../containers/FilteredRestaurants';
import { getRestaurants } from '../services/SearchService'
import { getRestaurantById } from '../services/RestaurantService';
import logo from './scranscanner-icon-white.png'

const TabHomeScreen = ({ navigation }) => {
        
    const [restaurants, setRestaurants] = useState([])
    const [highlightedResto, setHightlightedResto] = useState({})

    const chanterId = '4'

    useEffect(() => {
        getRestaurants()
            .then(restaurants => setRestaurants(restaurants));
    }, []);

    useEffect(() => {
        getRestaurantById(chanterId)
        .then((returnedResults) => {
            setHightlightedResto(returnedResults);
        })
    }, []);

    
    console.log(highlightedResto)

    return (
        <SafeAreaView >
            <ScrollView>
                <View style={styles.mainView}>
                        <Image style={styles.logo} source={logo} alt={"ScranScanner logo"}/>

                        
                        <Text style={styles.baseText}>Scran<Text style={styles.innerText}>Scanner</Text>
                        </Text>
                        <Text style={styles.textH2}>Feeling peckish?</Text>


                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                            () => navigation.navigate(
                                'Search', { screen: 'SearchScreen' }
                            )}>
                            <Text style={styles.ButtonText}>Find a table</Text>
                        </TouchableOpacity>

                            {/* <View>
                                <SearchForm restaurants={restaurants}/>
                                <Text style={{color:'black', paddingTop: 100, fontSize:30}}>
                                #opendining
                                </Text>
                            </View> */}
                        </View>


                            <View style={styles.FilteredRestaurants}>
                                <Text style={styles.textH1Dark}>Our top picks</Text>
                                <FilteredRestaurants restaurants={restaurants}/>
                            </View>

                        <View>
                            <Text>{highlightedResto.displayName}</Text>
                        </View>


                            {/* Weirdly can't get another component to APPEAR AND RENDER (the space is there....) */}
            </ScrollView>
        </SafeAreaView>


    );
    }
    
    const styles = StyleSheet.create({
    logo: {
        resizeMode: "contain",
        height: 100,
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
    baseText: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    innerText: {
        color: '#F38599',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',


    },
    textH1Dark: {
        fontSize: 22,
        textAlign: 'left',
        marginBottom: 16,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',

    },
    textH2: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
        fontFamily: 'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Light',
    },
    textH3: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey'
    },
    mainView: {
        padding: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#27233A'
    },
    FilteredRestaurants: {
        padding: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
    });
export default TabHomeScreen;