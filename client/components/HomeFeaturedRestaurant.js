import { TouchableOpacity, Text, Image } from "react-native"

const HomeFeaturedRestaurant = ({restaurant, navigation}) => {

    // image source for featured restaurant
    const restaurantImage = {
        uri: restaurant.imageURL,
        width: 350,
        height: 200
    };

    let preset_datetime = new Date('2022-10-01T12:00:00');

    return (
        <TouchableOpacity
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

export default HomeFeaturedRestaurant;