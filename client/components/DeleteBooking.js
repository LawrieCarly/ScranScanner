// FUTURE ARCHIVING --> Lines 18 - 31 moved to ReservationScreen file

// import {TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Alert} from 'react-native';


// const DeleteBooking = ({navigation, booking, onDeleteClick}) => {  
    
//     const onDelete = () => {

//         onDeleteClick(booking)
//     }

//     return(
        
//         <SafeAreaView>
//         <View>

//             <TouchableOpacity style={styles.btnStyle} onPress={ () => {
//                                 Alert.alert(
//                                     "Delete this booking?", 
//                                     "Click delete if you want to cancel this booking",    
//                                     [
//                                     {text: 'Delete Now', onPress: () => {onDelete}},
//                                     {text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel'}
//                                     ],
//                                     { cancelable: true }
//                                 );
//                             }
//                         }>
//                 <Text>Delete</Text>
//             </TouchableOpacity>

//         </View>
//         </SafeAreaView>

//     )

// }

// const styles = StyleSheet.create ({

//     btnStyle: {
//         backgroundColor: 'blue',
//         padding: 10,
//         borderRadius: 8
//     }

// });

// export default DeleteBooking;

