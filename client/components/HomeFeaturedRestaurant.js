import { TouchableOpacity, Text, Image, StyleSheet } from "react-native"

const HomeFeaturedRestaurant = ({restaurant, navigation, preset_datetime}) => {

    // image source for featured restaurant
    const restaurantImage = {
        uri: restaurant.imageURL,
        width: 350,
        height: 200
    };

    

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={ () => navigation.navigate(
                // params are stringified above (not objects)
                'Restaurant', { 
                    restaurantId: restaurant.id, 
                    partySize: 2, 
                    datetime: preset_datetime, 
                }
            )}>
            <Text style={styles.textH3Dark}>
                {restaurant.displayName}
            </Text>
            <Text style={styles.paraDark}>
                {restaurant.description}
            </Text>
            <Image source={restaurantImage}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textH3Dark: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 3,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    paraDark: {
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 5,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',
    },
    container: {
        marginBottom: 20
    }
})

export default HomeFeaturedRestaurant;