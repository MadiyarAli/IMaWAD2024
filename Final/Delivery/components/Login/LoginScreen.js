import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../context/AuthContext'
const LoginScreen = () => {
  const navigation = useNavigation()
  const { setIsLoggedIn } = React.useContext(AuthContext)

  const handleLogin = () => {
    setIsLoggedIn(true)
    console.log('Logged in')
  }

  return (
    <View style={styles.container}>
      <View style={styles.whiteBackground} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Log in</Text>
        </View>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.input} />
          <Text style={styles.text}>Password</Text>
          <TextInput style={styles.input} secureTextEntry />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => handleLogin()}
          >
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>
          <TouchableOpacity style={styles.socialButton}>
            <Text>🍏</Text>
            <Text style={styles.socialText}>Continue with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text>🔵</Text>
            <Text style={styles.socialText}>Continue with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text>🔴</Text>
            <Text style={styles.socialText}>Continue with Google</Text>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FECB4B',
    alignItems: 'center'
  },
  whiteBackground: {
    width: '200%',
    height: 600,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 360,
    borderTopRightRadius: 360,
    position: 'absolute',
    bottom: 0,
    zIndex: 0
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 70
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    fontSize: 15
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginVertical: 10,
    width: 255,
    height: 35
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
    fontWeight: 'bold',
    fontSize: 20
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc'
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  socialButton: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    borderRadius: 360,
    marginVertical: 5,
    flexDirection: 'row'
  },
  socialText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16
  },
  footerText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 10
  },
  signUpLink: {
    color: '#FECB4B',
    fontWeight: 'bold'
  }
})

export default LoginScreen
