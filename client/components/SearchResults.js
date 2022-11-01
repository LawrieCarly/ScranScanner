import { StyleSheet, View } from "react-native";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({navigation, searchResults, formParams}) => {
    
    const searchNodes = searchResults.map((restaurant, index) => { 
        
            return (
    
                // Params passed to RestaurantScreen route.
                <SearchResultItem
                    restaurant={restaurant}
                    key={index}
                    navigation={navigation}
                    partySize={formParams.partySize}
                    datetime={formParams.datetime}
                />
            
            );
            })
    
    return (
        <View
            // style={styles.container}
            >
            {searchNodes}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})

export default SearchResults