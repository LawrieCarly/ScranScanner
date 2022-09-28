import * as React from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, Button, ScrollView} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';


function TabProfileScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={{color: 'black', fontSize: 30, padding: 30}}>
                        👤 Hello, [User Name]
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>

                    <Button style={styles.button}
                    title="Go to Reservations"
                    onPress={() => navigation.navigate('Reservations')}
                    />
                    
                    <View style={{paddingTop: 50}}/>

                    <Button
                    title="Go to Favourites"
                    onPress={() => navigation.navigate('Favourites')}
                    />


                </View>

            </ScrollView>
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 50,
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
        textAlign: 'center',
        color: 'grey'
    },
    textH3: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey'
    },
    mainView: {
        padding: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
    });

export default TabProfileScreen;
