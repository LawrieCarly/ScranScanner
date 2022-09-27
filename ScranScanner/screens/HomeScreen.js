import * as React from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView} from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
            <View style={styles.mainView}>
            <Text style={styles.textH1}>ScranScanner Home</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={
                () => navigation.navigate(
                    'SettingsStack', { screen: 'Settings' }
                )}>
                <Text>Go to settng Tab</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={
                () => navigation.navigate('Details')
                }>
                <Text>Open Details Screen</Text>
            </TouchableOpacity>
            </View>

        </View>
        </SafeAreaView>
    );
    }
    
    const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    textH1: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16
    },
    textH2: {
        fontSize: 18,
        textAlign: 'center',
        color: 'grey'
    },
    textH3: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey'
    },
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    });
export default HomeScreen;