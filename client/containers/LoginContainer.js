import { useState } from "react"
import { Text, Button, StyleSheet, View, Pressable, TextInput, Alert } from "react-native"
import { getCustomerByEmail } from "../services/CustomerService";



const LoginContainer = ({flipLoggedIn, changeCustomerId}) => {

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
        if (customer.password == password){
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

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>scranscanner</Text>
            <View style={styles.form}>
                <TextInput style={styles.input}
                        onChangeText={handleEmailInput}
                        placeholder="email"
                        placeholderTextColor={"black"}
                    />
                <TextInput style={styles.input}
                        onChangeText={handlePasswordInput}
                        secureTextEntry={true}
                        placeholder="password"
                        placeholderTextColor={"black"}
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
      paddingHorizontal: 10,
      backgroundColor: "white"
    },
    heading: {
        fontSize: 50,
        color: "black"
    },
    form: {
        borderWidth: 3,
        padding: 10,
        width: "80%",
        borderRadius: 10
    },
    input: {
        borderBottomWidth: 3,
        marginBottom: 10,
        color: "black"
    },
    button: {
      alignItems: "center",
      backgroundColor: "#ff6633",
      padding: 10
    },
    buttonText: {
        color: "white"
    }
  });