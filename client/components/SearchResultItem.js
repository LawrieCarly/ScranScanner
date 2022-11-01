import { View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native'

const SearchResultItem = ({navigation, restaurant, partySize, datetime}) => {
    
    const restoImage = {
        uri: restaurant.imageURL,
        width: 320,
        height: 180,
    };
    
    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={
                    () => navigation.navigate(
                    // params are stringified above (not objects)
                        'Restaurant', { 
                            restaurantId: restaurant.id, 
                            partySize: partySize, 
                            datetime: datetime
                        })}
            >

                <View style={styles.restoPreview}>

                    <Image 
                        source={restoImage}
                    />
                    <Text style={styles.textH3Dark}>
                        {restaurant.displayName}
                    </Text>
                    
                    <Text style={styles.paraDark}>
                        {restaurant.description}
                    </Text> 

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