import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Sign up</Text>
      <View style={styles.form}>
        <View style={styles.row}>
          <TextInput style={styles.inputHalf} placeholder="First name" />
          <TextInput style={styles.inputHalf} placeholder="Last name" />
        </View>
        <TextInput style={styles.input} placeholder="Email address" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  backButton: {
    marginTop: 40,
    marginLeft: 20
  },
  backText: {
    fontSize: 24
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  form: {
    flex: 1,
    backgroundColor: '#FECB4B',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputHalf: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  confirmButton: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})

export default SignUpScreen
