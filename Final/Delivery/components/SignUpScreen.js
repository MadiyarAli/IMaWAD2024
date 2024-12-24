import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteBackground} />
      <View style={styles.goBack}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Sign up</Text>
      <View style={styles.form}>
        <View style={styles.row}>
          <View>
            <Text>First name</Text>
            <TextInput style={styles.inputHalf} />
          </View>
          <View>
            <Text>Last Name</Text>
            <TextInput style={styles.inputHalf} />
          </View>
        </View>
        <Text style={styles.inputText}>Email address</Text>
        <TextInput style={styles.input} />

        <Text style={styles.inputText}>Password</Text>
        <TextInput style={styles.input} secureTextEntry />

        <Text style={styles.inputText}>Confirm password</Text>
        <TextInput style={styles.input} secureTextEntry />
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.goBack()}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
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
    borderBottomLeftRadius: 360,
    borderBottomRightRadius: 360,
    position: 'absolute',
    top: 0,
    zIndex: 0
  },
  goBack: {
    alignSelf: 'flex-start'
  },
  backButton: {
    marginLeft: 20
  },
  backText: {
    fontSize: 50
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  form: {
    marginTop: 70,
    flex: 1,
    width: 255,
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    gap: 15
  },
  inputText: {
    alignSelf: 'flex-start'
  },
  inputHalf: {
    width: 120,
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5
  },
  text: {
    fontSize: 10
  },
  input: {
    width: 255,
    height: 35,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginVertical: 8
  },
  confirmButton: {
    backgroundColor: '#000',
    borderRadius: 15,
    marginBottom: 50,
    width: 145,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  }
})

export default SignUpScreen
