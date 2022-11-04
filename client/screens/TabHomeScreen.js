import React, {useState, useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView, ScrollView} from 'react-native';
import { getRestaurants } from '../services/RestaurantService'
import HomeHeader from '../components/HomeHeader';
import HomeFeaturedRestaurant from '../components/HomeFeaturedRestaurant';
import HomeRestaurantList from '../components/HomeRestaurantList';

const TabHomeScreen = ({ navigation }) => {
        
    const [restaurants, setRestaurants] = useState(null)

    useEffect(() => {
        // gets all restaurants to display as 'Available Now'
        getRestaurants()
            .then(restaurants => setRestaurants(restaurants));
    }, []);

    let preset_datetime = new Date('2022-10-01T12:00:00');

    return (
        <SafeAreaView >
            {restaurants? 
        
            <ScrollView>

            {/* Header */}
                
            <HomeHeader/>

            {/* Main content */}

            <View style={styles.homeFeatures}>

                <Text style={styles.textH2Dark}>Pick of the month</Text>
                <View style={styles.pinkUnderLine}/>

                {/* Displays 'Pick of the month' - currently simply the first restaraunt in restaurants */}
                <HomeFeaturedRestaurant
                    restaurant={restaurants[0]}
                    navigation={navigation}
                    preset_datetime={preset_datetime}
                    />

                {/* Displays horizontal scroll of all available restaurants */}

                <Text style={styles.textH2Dark}>
                    Available now!
                </Text>
                <View style={styles.pinkUnderLine}/>

                <HomeRestaurantList 
                    restaurants={restaurants}
                    preset_datetime={preset_datetime}
                    />
                
            </View>
        </ScrollView>

        :
    
        null
    
        }
 
        </SafeAreaView>


    );
    }

    //! DONE
    
    const styles = StyleSheet.create({
    pinkUnderLine : {
        height:1,
        width: 100,
        marginBottom: 20,
        backgroundColor: '#F38599'
    },
    textH2Dark: {
        fontSize: 22,
        textAlign: 'left',
        marginBottom: 5,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    homeFeatures: {
        padding: 20,
        justifyContent: 'flex-start',
    },
    // featuredRestos: {
    //     paddingTop: 30,
    // }
    });
export default TabHomeScreen;