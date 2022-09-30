import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, View, Text, SafeAreaView, TextInput, Pressable, ScrollView } from 'react-native';
import SearchResultsRestaurants from '../containers/SearchResultsRestaurants';
import { useIsFocused } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import { getSearchResults } from '../services/SearchService';



const TabSearchResultsScreen = ({ navigation, restaurants }) => {
    const IsFocused = useIsFocused();


    const [partySize, setPartySize] = React.useState("");
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [searchResults, setSearchResults] = React.useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();
        const searchCriteria =  {
            partySize: partySize,
            date: moment(date).format('YYYY-MM-DD'),
        }
        // console.log(restaurantList)
        setPartySize("");
        setDate(new Date());
    }

    useEffect( () => {
        getSearchResults()
        .then(searchResults => setSearchResults(searchResults))
        }, [IsFocused]);

    return (
        <SafeAreaView style={{ flex: 1 }}>

        <View>
            <Text>Search for a table!</Text>
            <TextInput
                style={styles.input}
                onChangeText={(input) => setPartySize(input)}
                value={partySize}
                placeholder="eg. 4"
                keyboardType='numeric'
                />
            <Pressable style={styles.button} onPress={() => setOpen(true)}>
                <Text style={styles.buttonText} >Select date/time</Text>
            </Pressable>
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {setOpen(false), setDate(date)}}
                onCancel={() => { setOpen(false)}}
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Find Restaurants</Text>
            </Pressable>

            <View >
                <ScrollView>

                    <View style={{flex: 2}}>
                        <View>
                        {searchResults.map((searchResult, index) => { return (
                        <View><Text style={styles.textH1} id={searchResult.id} key={index}>{searchResult.displayName}</Text></View>
                        );})}
                        </View>
                    
                    <ScrollView>


                    </ScrollView>
                    </View>
                </ScrollView>
            </View>

        
        </View>




        <View style={{ flex: 1, padding: 16 }}>
            <View >
            <Text style={styles.textH1}>🔎 Search Page </Text>
            
            <Text style={styles.textH2}>SEARCH FORM WILL BE HERE</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={
                () => navigation.navigate(
                    'Search', { screen: 'SearchScreen' }
                )}>
                <Text>Search PlaceHolder </Text>
            </TouchableOpacity>
            </View>
            <SearchResultsRestaurants/>

        </View>
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
        textAlign:'left',
        color: 'grey'
    },
    textH3: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey'
    },
    mainView: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
    });
export default TabSearchResultsScreen;



// import React, {useState} from 'react'
// import { SafeAreaView, StyleSheet, TextInput, View, Text, Pressable } from "react-native";
// import DatePicker from 'react-native-date-picker'
// import moment from 'moment';

// export const SearchForm = ({restaurants}) => {

// const [location, setLocation] = React.useState("");
// const [partySize, setPartySize] = React.useState("");
// const [date, setDate] = useState(new Date())
// const [open, setOpen] = useState(false)

// const handleSubmit = (event) => {
//     event.preventDefault();
//     const searchCriteria =  {
//         location: location,
//         partySize: partySize,
//         date: moment(date).format('YYYY-MM-DD'),
//     }
//     // console.log(restaurantList)
//     setLocation("");
//     setPartySize("");
//     setDate(new Date());
// }

// console.log(restaurants)

// // const restaurantList = () => { restaurants.map((restaurant) => {
// //         return (
// //         <View>
// //             <Text>{restaurant.title}</Text>
// //         </View>
// //         );
// //     });
// // };

// return (
//     <View>
//         <Text>Search for a table!</Text>
//         <TextInput
//             style={styles.input}
//             onChangeText={(input) => setLocation(input)}
//             placeholder="Edinburgh"
//             value={location}
//             />
//         <TextInput
//             style={styles.input}
//             onChangeText={(input) => setPartySize(input)}
//             value={partySize}
//             placeholder="eg. 4"
//             keyboardType='numeric'
//             />
//         <Pressable style={styles.button} onPress={() => setOpen(true)}>
//             <Text style={styles.buttonText} >Select date/time</Text>
//         </Pressable>
//         <DatePicker
//             modal
//             open={open}
//             date={date}
//             onConfirm={(date) => {setOpen(false), setDate(date)}}
//             onCancel={() => { setOpen(false)}}
//         />
//         <View>
//             {restaurants.map((restaurant, index) => { return (
//             <View><Text id={restaurant.id} key={index} style={styles.buttonText}>{restaurant.displayName}</Text></View>
//             );})}
//         </View>
//         <Pressable style={styles.button} onPress={handleSubmit}>
//             <Text style={styles.buttonText}>Find Restaurants</Text>
//         </Pressable>

        
//     </View>
// )}

// const styles = StyleSheet.create({
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//     },
//     button: {
//         height: 40,
//         margin: 12,
//         padding: 10,
//         backgroundColor:"black"
//     },
//     buttonText: {
//         color:'black'

//     },

// });
