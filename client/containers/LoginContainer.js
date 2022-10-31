import { useState } from "react"
import { Text, Button, StyleSheet, View, Pressable, TextInput, Alert, Image } from "react-native"
import { getCustomerByEmail } from "../services/CustomerService";
import logoWhite from "./scranscanner-icon-white.png"



const LoginContainer = ({ flipLoggedIn, changeCustomerId }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailInput = (textInput) => {
        setEmail(textInput)
    }

    const handlePasswordInput = (textInput) => {
        setPassword(textInput)
    }

    const handleLogin = async () => {
        // GET customer by email
        const customer = await getCustomerByEmail(email)

        // IF customer.password == password
        if (customer.password == password) {
            // login in customer
            //flip login state
            flipLoggedIn()
            changeCustomerId(customer.id)
            //send customer id to global
        }
        else {
            // ELSE alert email or password incorrect
            Alert.alert("Username or Password Incorrect")
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logoWhite} source={logoWhite} />
                <Text style={styles.heading}>Scran<Text style={styles.innerText}>Scanner</Text></Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    onChangeText={handleEmailInput}
                    placeholder="email"
                    placeholderTextColor={"white"}
                />
                <TextInput style={styles.input}
                    onChangeText={handlePasswordInput}
                    secureTextEntry={true}
                    placeholder="password"
                    placeholderTextColor={'white'}
                />
                <Pressable
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>



        </View>

    )
}

export default LoginContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: '#27233A'
    },
    logoContainer: {
        alignItems: "center",
    },
    logoWhite: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
    heading: {
        fontSize: 40,
        color: '#F38599',
        fontFamily: 'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    innerText: {
        fontSize: 40,
        color: "white",
        fontFamily: 'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-SemiBold',
    },
    form: {
        borderWidth: 1,
        padding: 40,
        width: "80%",
        borderRadius: 10,
        borderColor: 'white',
    },
    input: {
        borderBottomWidth: 3,
        marginBottom: 10,
        color: '#F38599',
        fontSize: 16,
        fontFamily: 'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',

    },
    button: {
        alignItems: "center",
        backgroundColor: '#F38599',
        borderRadius: 10,
        padding: 10
    },
    buttonText: {
        color: "white"
    }
});