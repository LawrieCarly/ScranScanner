import * as React from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Image} from 'react-native';


const logo2 = {
    uri: 'https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    width: '100%'  
  };


const RestaurantPreview = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{maxWidth: 50 }}>
            <View style={styles.mainView}>
                <Text style={styles.textH1}>Restaurant Name</Text>
                <Image source={logo2}/>
                <Text style={styles.textH2}>Details</Text>
                <Text style={styles.textH2}>Details</Text>
                <Text style={styles.textH2}>Details</Text>
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
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
    });
export default RestaurantPreview;