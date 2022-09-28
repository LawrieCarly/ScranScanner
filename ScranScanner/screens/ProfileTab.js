import * as React from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Button} from 'react-native';


const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
            <View style={styles.mainView}>
            <Text style={styles.textH1}>👤 Hello, [UserName] </Text>

            <View style={{padding: 50}}/>

            <Button
                    title='My Reservations'
                    onPress={
                    () => navigation.navigate(
                        'ReservationsScreen', { screen: 'ReservationsScreen' }
                    )}>
            </Button>

            {/* <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('ReservationsScreen')
            }>
            <Text>My Reservations</Text>

          </TouchableOpacity> */}

            <View style={{padding: 50}}/>



            </View>

        </View>
        </SafeAreaView>


    );
    }
    
    const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    textH1: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16,
        color: 'black'
    },
    textH2: {
        fontSize: 18,
        textAlign:'left',
        color: 'grey'
    },
    textH3: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey'
    },
    mainView: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
    });
export default ProfileScreen;
