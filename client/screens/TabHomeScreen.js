import React, {useState, useEffect} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, ScrollView, RecyclerViewBackedScrollViewComponent, Image} from 'react-native';
import { SearchForm } from '../components/searchForm';
import FilteredRestaurants from '../containers/FilteredRestaurants';
import { getRestaurants } from '../services/SearchService'
import logo from './ScanScannerLogo.png'


const TabHomeScreen = ({ navigation }) => {
        
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        getRestaurants()
            .then(restaurants => setRestaurants(restaurants));
    }, []);

    return (
        <SafeAreaView >
            <ScrollView>
                <View style={styles.mainView}>
                        <Image style={styles.logo} source={logo} alt={"ScranScanner logo"}/>

                        <Text style={styles.textH1}>Famished?</Text>
                        <Text style={styles.textH2}>Let's find you a table...</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                            () => navigation.navigate(
                                'Search', { screen: 'SearchScreen' }
                            )}>
                            <Text>Search PlaceHolder </Text>
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

                            {/* Weirdly can't get another component to APPEAR AND RENDER (the space is there....) */}
            </ScrollView>
        </SafeAreaView>


    );
    }
    
    const styles = StyleSheet.create({
    logo: {
        resizeMode: "contain",
        width: 300,
    },
        button: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    textH1: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16,
        color: 'white'
    },
    textH1Dark: {
        fontSize: 22,
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#27233A'
    },
    textH2: {
        fontSize: 18,
        textAlign: 'center',
        color: '#F38599'
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