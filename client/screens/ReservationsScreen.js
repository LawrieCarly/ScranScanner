import * as React from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView} from 'react-native';
import RestaurantPreviewSmall from '../components/RestaurantPreviewSmall';
import FilteredRestaurants from '../containers/FilteredRestaurants';


const ReservationsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
            <View style={styles.mainView}>
                <Text style={styles.textH1}>Here's what you've booked:</Text>
            </View>
          
            <View style={styles.mainView}>
                <RestaurantPreviewSmall/>
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
export default ReservationsScreen;