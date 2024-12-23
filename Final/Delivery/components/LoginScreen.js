import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  CheckBox
} from 'react-native'

import { AuthContext } from '../context/AuthContext'
const LoginScreen = () => {
  const { setIsLoggedIn } = React.useContext(AuthContext)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Log in</Text>
      </View>
      <View style={styles.form}>
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
        />
        <View style={styles.rememberMe}>
          <CheckBox />
          <Text>Remember me</Text>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => handleLogin()}
        >
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or</Text>
        <TouchableOpacity style={styles.socialButton}>
          <Text>🔵 Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text>🍏 Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text>🔴 Continue with Google</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Not a member?{' '}
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('SignUp')}
          >
            Sign up now
          </Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FECB4B'
  },
  header: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FECB4B',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  form: {
    flex: 0.6,
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -30
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  loginButton: {
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10
  },
  socialButton: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20
  },
  signUpLink: {
    color: '#FECB4B',
    fontWeight: 'bold'
  }
})

export default LoginScreen
