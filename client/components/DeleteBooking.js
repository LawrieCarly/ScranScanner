import {TouchableOpacity, StyleSheet, View, Text, SafeAreaView} from 'react-native';


const deleteBooking = ({navigation, booking, onDeleteClick}) => {
        
        const onDelete = (booking) => {

            onDeleteClick(booking)
            
        }

        return(
            <SafeAreaView>
            <View>

                <TouchableOpacity style={styles.btnStyle} onPress={ () => {
                                    Alert.alert(
                                        'Delete Booking?',
                                        'Click delete if you want to cancel this booking'    
                                      [
                                        {text: 'Delete Now', onPress: () => {onDelete}},
                                        {text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel'}
                                      ],
                                      { cancelable: true }
                                    )}}>
                    <Text>Delete</Text>
                </TouchableOpacity>

            </View>
            </SafeAreaView>

        )

}

const styles = StyleSheet.create ({

    btnStyle: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 8
    }

});

export default deleteBooking;

