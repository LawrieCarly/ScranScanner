import React, {useState, useEffect} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, ScrollView, RecyclerViewBackedScrollViewComponent} from 'react-native';
import { SearchForm } from '../components/searchForm';
import FilteredRestaurants from '../containers/FilteredRestaurants';
import { getRestaurants } from '../services/SearchService'



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

                        <Text style={styles.textH1}>🍔 ScranScanner 🍔 </Text>
                        <Text style={styles.textH2}>Let's find ya some scran eh pal?</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                            () => navigation.navigate(
                                'Search', { screen: 'SearchScreen' }
                            )}>
                            <Text>Search PlaceHolder </Text>
                        </TouchableOpacity>

                            <View>
                                <SearchForm restaurants={restaurants}/>
                                <Text style={{color:'black', paddingTop: 100, fontSize:30}}>
                                #opendining
                                </Text>
                            </View>


                            <View style={{paddingTop: 70}}>
                                <FilteredRestaurants/>
                            </View>

                            {/* Weirdly can't get another component to APPEAR AND RENDER (the space is there....) */}


                </View>
            </ScrollView>
        </SafeAreaView>


    );
    }
    
    const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
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
        color: 'grey'
    },
    textH3: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey'
    },
    mainView: {
        padding: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
    });
export default TabHomeScreen;