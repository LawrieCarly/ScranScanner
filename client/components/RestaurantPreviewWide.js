import React, {useState} from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const logo2 = {
    uri: 'https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    width: 160,
    height: 120
};



const RestaurantPreviewWide = () => {
    const navigation = useNavigation();
    return (

        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={
                    () => navigation.navigate(
                        'Restaurant')}
                        >

                
                        <Text style={{ fontSize: 16, color: 'black', paddingBottom: 20}}>
                        EXAMPLE RESTAURANT
                        </Text>
                        <View>
                            <Image source={logo2} />
                        </View>
                </TouchableOpacity>
        </View>
    )};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        width: 350,
        marginTop: 16,
    },

    });

export default RestaurantPreviewWide;



