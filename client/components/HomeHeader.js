import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import logo from '../assets/scranscanner-icon-white.png'

const HomeHeader = () => {
    return (
        <View style={styles.mainView}>

            <Image style={styles.logo} source={logo} alt={"ScranScanner logo"}/>

            <Text style={styles.baseText}>
                Scran
                    <Text style={styles.innerText}>
                        Scanner
                    </Text>
            </Text>

            <Text style={styles.textH2}>
                Feeling peckish?
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate(
                    'Search', { 
                        screen: 'SearchScreen' 
                    }
                )}>
                <Text style={styles.ButtonText}>Find a table</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        padding: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#27233A'
    },
    baseText: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    innerText: {
        color: '#F38599',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    pinkUnderLine : {
        height:1,
        width: 100,
        marginBottom: 20,
        backgroundColor: '#F38599'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#F38599',
        borderRadius: 10,
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    ButtonText: {
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
        fontSize: 15,
        color: '#27233A',
    },
    textH2: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
        fontFamily: 'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Light',
    },
})

export default HomeHeader;