import { View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native'


// Called in SearchResults.js
const SearchResultItem = ({navigation, restaurant, partySize, datetime}) => {
    

    // Image formatting for component rendering
    const restoImage = {
        uri: restaurant.imageURL,
        width: 320,
        height: 180,
    };
    
    return (
        <View>

            {/* Links to Restaurant Screen */}
            {/* Passes fromParams through route */}
            <TouchableOpacity
                style={styles.container}
                onPress={
                    () => navigation.navigate(
                    // params are stringified (not objects)
                        'Restaurant', { 
                            restaurantId: restaurant.id, 
                            partySize: partySize, 
                            datetime: datetime
                        })}
            >

                <View style={styles.restoPreview}>
                    
                    {/* Restaurants featured img */}
                    <Image 
                        source={restoImage}
                    />
                    {/* Restaurant displayName */}
                    <Text style={styles.textH3Dark}>
                        {restaurant.displayName}
                    </Text>
                    {/* Restaurant description */}
                    <Text style={styles.paraDark}>
                        {restaurant.description}
                    </Text> 
                    {/* Style only view - displays horizontal line at bottom of component */}
                    <View style={styles.pinkUnderLine}/>
                </View>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    restoPreview : {
        paddingLeft: 30,
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
        textAlign: 'left',
        marginBottom: 5,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',
    },
    pinkUnderLine : {
        height:1,
        width: 100,
        marginTop: 10,
        backgroundColor: '#F38599'
    },
})

export default SearchResultItem