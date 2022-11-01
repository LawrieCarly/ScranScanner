import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';
import DatePicker from 'react-native-date-picker'


const SearchForm = ({handleSearch}) => {

    const [partySize, setPartySize] = useState("");
    const [datetime, setDatetime] = useState(new Date());
    const [open, setOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        handleSearch(partySize, datetime);
        }

    return(
        <View style={styles.searchForm}>
                <TextInput
                    style={styles.input}
                    onChangeText={ (input) => setPartySize(input) }
                    value={partySize}
                    placeholder="party size eg. 4"
                    keyboardType='numeric'
                />

                <Pressable 
                    style={styles.buttonDark} 
                    onPress={() => setOpen(true)}>
                        <Text style={styles.buttonTextLight} >
                            Select date/time
                        </Text>
                </Pressable>

                <DatePicker
                    modal
                    open={open}
                    date={datetime}
                    onConfirm={(date) => {setOpen(false), setDatetime(date)}}
                    onCancel={() => { setOpen(false)}}
                />
                
                <Pressable 
                    style={styles.button} 
                    onPress={handleSubmit}>
                        <Text style={styles.buttonTextLight}>
                            Find Restaurants
                        </Text>
                </Pressable>
            </View>
    )
}

const styles = StyleSheet.create({
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
    buttonDark: {
        alignItems: 'center',
        backgroundColor: '#27233A',
        borderRadius: 10,
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#F38599',
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
})

export default SearchForm;