import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { AuthContext } from '../AuthContext'
const LoginScreen = () => {
  const { setIsLoggedIn } = React.useContext(AuthContext)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }
	
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title:{
    fontSize: 12
  },
  input:{
  }
})

export default LoginScreen
