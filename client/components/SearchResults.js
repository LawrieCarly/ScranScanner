import { StyleSheet, View } from "react-native";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({navigation, searchResults, formParams}) => {
    
    // Maps over all search results and renders a SearchResultItem
    const searchNodes = searchResults.map((restaurant, index) => { 
        
            return (
                
                // Passes navigation and formParams as props - required for navigating to RestaurantScreen
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
        // Renders results as list

        // TODO - Investigate react native list components for accessability
        <View>
            {searchNodes}
        </View>
    )
}


export default SearchResults