import * as React from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView} from 'react-native';


const ResultsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
            <View style={styles.mainView}>
            <Text style={styles.textH1}>🔎 Search Page </Text>

            <Text style={styles.textH2}>SEARCH FORM WILL BE HERE</Text>

            </View>

        </View>
        </SafeAreaView>


    );
    }
    
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
export default ResultsScreen;