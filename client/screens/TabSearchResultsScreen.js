import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, View, Text, SafeAreaView, TextInput, Pressable, ScrollView, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker'
import { getSearchResults } from '../services/RestaurantService';
import moment from 'moment';
import logo from '../assets/scranscanner-icon-dark.png'


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
    
        const formattedDate = moment(date).format('YYYY-MM-DD')
        const formattedTime = moment(date).format('HH:mm')

    useEffect(() => {

            // filters through all objects, removing the duplicates with same restaurant.id
            
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
    }, [searchResults])

    return (

    <View>
        <View style={styles.searchView}>
            <Image  style={styles.image} source={logo}/>
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

    //! DONE
    
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
    searchForm: {
        paddingTop: 20,
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

export default TabSearchResultsScreen;