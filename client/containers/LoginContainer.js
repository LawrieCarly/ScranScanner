import { useState } from "react"
import { Text, Button, StyleSheet, View, Pressable, TextInput } from "react-native"



const LoginContainer = ({flipLoggedIn}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailInput = (textInput) => {
        setEmail(textInput)
    }

    const handleLogin = () => {
        // GET customer by email
        const customer = getCustomerByEmail(email)

        // IF customer.password == password
        if (customer.password == password){
            // login in customer
            //flip login state
            flipLoggedIn()
            //send customer id to global
            
        }

            

        // ELSE alert email or password incorrect
        
        
        flipLoggedIn()

    }
    return(
        <View>
            <TextInput style={styles.input}
                    onChangeText={handleEmailInput}
                    name="name"
                    placeholder="name"
                    placeholderTextColor={"black"}
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