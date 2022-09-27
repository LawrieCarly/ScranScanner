import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{color: 'black', fontSize: 20}}>THIS IS THE PROFILE SCREEN</Text>
        </View>
    );
    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            backgroundColor: 'blue',
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
            color: 'black',
            paddingTop: 100
    
        },
        textH3: {
            fontSize: 16,
            textAlign: 'center',
            color: 'black'
    
        },
        mainView: {
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        }
        });
}