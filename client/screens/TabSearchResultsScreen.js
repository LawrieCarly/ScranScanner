import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, View, Text, SafeAreaView, TextInput, Pressable, ScrollView, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker'
import { getSearchResults } from '../services/SearchService';
import moment from 'moment';
import logo from './scranscanner-icon-dark.png'
import image from './scranscanner-icon-dark.png'

const logo2 = {
    uri: 'https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    width: 160,
    height: 120
};

const TabSearchResultsScreen = ({ navigation, restaurants }) => {
    const IsFocused = useIsFocused();


    const [partySize, setPartySize] = React.useState("");
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [searchResults, setSearchResults] = React.useState([]);
    const [searchNodes, setSearchNodes] = React.useState([]);

    
    
    function handleSubmit(event) {
        event.preventDefault();
        getSearchResults(partySize, date, time)
        .then((returnedResults) => {
            const uniqueResults = [... new Set(returnedResults)]
            setSearchResults(uniqueResults);
        })
    }
    
        // Converted state into strings here instead of in the service, to allow them to be passed as params to RestaurantScreen
        const formattedDate = moment(date).format('YYYY-MM-DD')
        const formattedTime = moment(date).format('HH:mm')



        // console.log('====================================');
        // console.log(formattedDate);
        // console.log(formattedTime);
        // console.log('====================================');


    useEffect(() => {

            // filteres through all objects, removing the duplicates with same restaurant.id
            
            const uniqueIds = [];

            let result = searchResults.filter( (restaurant) => {
                if(!uniqueIds.includes(restaurant.id)){
                    uniqueIds.push(restaurant.id);
                    return restaurant;
                }
            });

            const searchNodes = result.map((searchResult, index) => { 
                const RestoImage = {
                    uri: searchResult.imageURL,
                    width: 320,
                    height: 180,
                };
                return (

                    // Params passed to RestaurantScreen route.
                    // Moved touchable opacity into searchNodes to make navigate work. Still ned to figure out scroll.
                    <View>
                    <TouchableOpacity
                    onPress={
                        () => navigation.navigate(
                            // params are stringified above (not objects)
                            'Restaurant', { 
                                restaurantId: searchResult.id, 
                                partysize: partySize, 
                                date: formattedDate, 
                                time: formattedTime 
                            })}
                    >
                    <View style={styles.restoPreview}>
                        <Image style={styles.previewImage} source={RestoImage}/>
                        <Text id={searchResult.id} key={index} style={styles.textH3Dark}>{searchResult.displayName}</Text>
                        <Text style={styles.paraDark}>{searchResult.description}</Text> 
                        <View style={styles.pinkUnderLine}/>
                    </View>
                    </TouchableOpacity>
                    </View>
                
                );
                })
                setSearchNodes(searchNodes)
                // console.log(searchNodes);
    }, [searchResults])

    return (

    <View>
        <View style={styles.searchView}>
            <Image  style={styles.image} source={image}/>
            <Text style={styles.baseText}>Scran<Text style={styles.innerText}>Scanner</Text></Text>
                <View style={styles.searchForm}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(input) => setPartySize(input)}
                        value={partySize}
                        placeholder="party size eg. 4"
                        keyboardType='numeric'
                        />
                    <Pressable style={styles.buttonDark} onPress={() => setOpen(true)}>
                        <Text style={styles.buttonTextLight} >Select date/time</Text>
                    </Pressable>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {setOpen(false), setDate(date), setTime(date)}}
                        onCancel={() => { setOpen(false)}}
                    />
                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Find Restaurants</Text>
                    </Pressable>
                </View>
        </View>
        
                <ScrollView>
                    <View>
                        {searchNodes}
                    </View>
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
    textH2Dark: {
        fontSize: 22,
        textAlign: 'left',
        marginBottom: 5,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
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
    searchForm: {
        paddingTop: 20,
    },
    formLabels: {
        textAlign: 'left',
    },
    restoPreview: {
        padding: 10,
        margin: 20,
    },  
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
    buttonText: {
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
        fontSize: 15,
        color: '#27233A',
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