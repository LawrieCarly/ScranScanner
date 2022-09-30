import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, View, Text, SafeAreaView, TextInput, Pressable, ScrollView, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker'
import { getSearchResults } from '../services/SearchService';

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

    useEffect(() => {
            const searchNodes = searchResults.map((searchResult, index) => { 
                return (
                    <View>
                        <Text id={searchResult.id} key={index}>{searchResult.displayName}</Text> 
                        <Image source={logo2}/>
                    </View>
                
                );
                })
                setSearchNodes(searchNodes)
                console.log(searchNodes);
    }, [searchResults])



    return (
        <SafeAreaView style={{ flex: 1 }}>
    
        <Text style={styles.textH1}>🔎 Search Page </Text>
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
                onConfirm={(date) => {setOpen(false), setDate(date), setTime(date)}}
                onCancel={() => { setOpen(false)}}
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Find Restaurants</Text>
            </Pressable>

            <View >
                <ScrollView>

                    <View style={{flex: 2}}>
                    <TouchableOpacity
                        onPress={
                            () => navigation.navigate(
                            'Restaurant')}
                        >
                        <View>
                            {searchNodes}
                        </View>
                </TouchableOpacity>
                    
                    <ScrollView>


                    </ScrollView>
                    </View>
                </ScrollView>
            </View>

        
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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor:"black"
    },
    buttonText: {
        color:'white'

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