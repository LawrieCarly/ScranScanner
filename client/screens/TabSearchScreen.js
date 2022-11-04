import {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, Image, SafeAreaView } from 'react-native';

import { getSearchResults } from '../services/RestaurantService';
import logo from '../assets/scranscanner-icon-dark.png'
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';


const TabSearchScreen = ({ navigation }) => {

    
    const [searchResults, setSearchResults] = useState(null);
    const [formParams, setFormParams] = useState({});

    useEffect(() => {
        // cleans search result when navigating away from screen
        const cleanState = navigation.addListener('blur', () => {
            setSearchResults(null)
            });
    
        return cleanState;
    }, [navigation]);

    const handleSearch = async (partySize, datetime) => {

        const searchResults = await getSearchResults(partySize, datetime);

        const uniqueIds = [];

        const uniqueResults = await searchResults.filter( (restaurant) => {
            if(!uniqueIds.includes(restaurant.id)){
                uniqueIds.push(restaurant.id);
                return restaurant;
            }
        });

        setFormParams({
            partySize: partySize,
            datetime: datetime,
        })
        
        setSearchResults(uniqueResults);
    }

    return (

    <SafeAreaView>
        <View style={styles.searchView}>
            <Image  style={styles.image} source={logo}/>

            {/* 
            TODO 
            - Text is used in TabHomeScreen.js, make component
            - Move appropriate StyleSheet objects 
            */}
            <Text style={styles.baseText}>
                Scran<Text style={styles.innerText}>Scanner</Text>
            </Text>

            <SearchForm
                handleSearch={handleSearch}
            />

        </View>
        
        <ScrollView>

            {searchResults?

            <SearchResults
                navigation={navigation}
                searchResults={searchResults}
                formParams={formParams}
            />

            :

            null

            }
            
        </ScrollView>

    </SafeAreaView>


    );
    }

    
    const styles = StyleSheet.create({
        image: {
            height:70,
            resizeMode: 'contain'
        },
        searchView: {
            padding: 20,
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        baseText: {
            fontSize: 25,
            textAlign: 'center',
            color: 'black',
            fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
        },
        innerText: {
            color: 'black',
            fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-SemiBold',
        },
    });

export default TabSearchScreen;