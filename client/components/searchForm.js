import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import DatePicker from 'react-native-date-picker'
import moment from 'moment';

export const SearchForm = ({restaurants}) => {

const [location, setLocation] = React.useState("");
const [partySize, setPartySize] = React.useState("");
const [date, setDate] = useState(new Date())
const [open, setOpen] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault();
    const searchCriteria =  {
        location: location,
        partySize: partySize,
        date: moment(date).format('YYYY-MM-DD'),
    }
    // console.log(restaurantList)
    setLocation("");
    setPartySize("");
    setDate(new Date());
}

console.log(restaurants)

// const restaurantList = () => { restaurants.map((restaurant) => {
//         return (
//         <View>
//             <Text>{restaurant.title}</Text>
//         </View>
//         );
//     });
// };

return (
    <View>
        <Text>Search for a table!</Text>
        <TextInput
            style={styles.input}
            onChangeText={(input) => setLocation(input)}
            placeholder="Edinburgh"
            value={location}
            />
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
        <View>
            {restaurants.map((restaurant, index) => { return (
            <View><Text id={restaurant.id} key={index} style={styles.buttonText}>{restaurant.displayName}</Text></View>
            );})}
        </View>
        <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Find Restaurants</Text>
        </Pressable>

        
    </View>
)}

const styles = StyleSheet.create({
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
        color:'black'

    },

});
