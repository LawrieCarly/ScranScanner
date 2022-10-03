import { Text, Button } from "react-native"

const LoginContainer = ({flipLoggedIn}) => {

    const handleLogin = () => {
        flipLoggedIn()

    }
    return(
        <>
            <Text>This is the login container</Text>
            <Button
  onPress={() => {
    flipLoggedIn();
  }}
  title="Press Me"
/>
        </>
        
    )
}

export default LoginContainer