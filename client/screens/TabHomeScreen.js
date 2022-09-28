import * as React from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, ScrollView, RecyclerViewBackedScrollViewComponent} from 'react-native';
import FilteredRestaurants from '../containers/FilteredRestaurants';


const TabHomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.mainView}>

                        <Text style={styles.textH1}>🍔 ScranScanner 🍔 </Text>
                        <Text style={styles.textH2}>Let's find ya some scran eh pal?</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                            () => navigation.navigate(
                                'Search', { screen: 'SearchScreen' }
                            )}>
                            <Text>Search_SEARCHSCREEN_ </Text>
                        </TouchableOpacity>

                            <View>
                                <Text style={{color:'black', paddingTop: 100, fontSize:30}}>
                                #opendining
                                </Text>
                            </View>
                            <View style={{paddingTop: 70}}>
                                <FilteredRestaurants/>
                            </View>

                            {/* Weirdly can't get another component to APPEAR AND RENDER (the space is there....) */}


                </View>
            </ScrollView>
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
        color: 'grey'
    },
    textH3: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey'
    },
    mainView: {
        padding: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
    });
export default TabHomeScreen;