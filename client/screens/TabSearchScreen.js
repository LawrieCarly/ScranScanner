import {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import { getSearchResults } from '../services/RestaurantService';
import logo from '../assets/scranscanner-icon-dark.png'
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';


const TabSearchScreen = ({ navigation }) => {

    
    const [searchResults, setSearchResults] = useState(null);
    const [formParams, setFormParams] = useState({});

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

    <View>
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

    </View>


    );
    }

    
    const styles = StyleSheet.create({
    pinkUnderLine : {
        height:1,
        width: 100,
        marginTop: 10,
        backgroundColor: '#F38599'
    },
    restoPreview : {
        paddingLeft: 30,
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
        textAlign: 'left',
        marginBottom: 5,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',
    },
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
     
    input: {
        height: 40,
        marginTop: 8,
        borderWidth: 1,
        borderRadius: 10,
        width:300,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#F38599',
        borderRadius: 10,
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    buttonDark: {
        alignItems: 'center',
        backgroundColor: '#27233A',
        borderRadius: 10,
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    buttonTextLight: {
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
        fontSize: 15,
        color: 'white',
    },
    });

export default TabSearchScreen;