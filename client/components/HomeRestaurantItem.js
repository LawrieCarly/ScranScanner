import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity,Image, Text, StyleSheet } from "react-native";

const HomeRestaurantItem = ({restaurant, preset_datetime}) => {
    
    const navigation = useNavigation();

    const restoImage = {
        uri: restaurant.imageURL,
        width: 250,
        height: 150
      };

    return(
        <TouchableOpacity
            onPress={() => navigation.navigate(
                        'Restaurant', { 
                            restaurantId: restaurant.id, 
                            partySize: 2, 
                            datetime: preset_datetime,
                        })}
                        >

            <View style={styles.homeFilters} horizontal={true}>
                <Image source={restoImage}/>
                <Text style={styles.textH3Dark}>{restaurant.displayName}</Text>
                <Text style={styles.paraDark}>{restaurant.description}</Text> 
                <View style={styles.pinkUnderLine}/>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    homeFilters: {
      marginRight: 20,
    },
    pinkUnderLine : {
        height:1,
        width: 100,
        marginTop: 10,
        backgroundColor: '#F38599'
    },
    textH3Dark: {
        fontSize: 18,
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 3,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    paraDark: {
        fontSize: 16,
        width: 250,
        flexWrap: 'wrap',
        textAlign: 'left',
        marginBottom: 5,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',
    },
  });

export default HomeRestaurantItem;