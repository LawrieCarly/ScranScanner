import { useState } from "react"
import { Text, Button, StyleSheet, View, Pressable, TextInput, Alert } from "react-native"
import { getCustomerByEmail } from "../services/CustomerService";



const LoginContainer = ({flipLoggedIn}) => {

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
        console.log(customer);

        // IF customer.password == password
        if (customer.password == password){
            // login in customer
            //flip login state
            flipLoggedIn()
            //send customer id to global

        }

            

        // ELSE alert email or password incorrect
        Alert.alert("Username or Password Incorrect")

    }

    return(
        <View>
            <TextInput style={styles.input}
                    onChangeText={handleEmailInput}
                    name="email"
                    placeholder="email"
                    placeholderTextColor={"white"}
                />
            <TextInput style={styles.input}
                    onChangeText={handlePasswordInput}
                    name="password"
                    placeholder="password"
                    placeholderTextColor={"white"}
                />
            <Pressable
                style={styles.button}
                onPress={handleLogin}
            >
                <Text>Login</Text>
            </Pressable>
           
            
        </View>
        
    )
}

export default LoginContainer

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    imput: {},
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });