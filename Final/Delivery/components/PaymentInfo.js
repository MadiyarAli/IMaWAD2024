import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

const PaymentInfo = () => {
  const navigation = useNavigation()
  const [cardholderName, setCardholderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [cardError, setCardError] = useState('')

  const handleConfirmPayment = () => {
    // if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ''))) {
    //   setCardError('Invalid type of card number')
    //   return
    // }
    setCardError('')
		console.log('navigated')
		navigation.navigate('FeedbackScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Payment info</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Cardholder Name</Text>
          <TextInput
            style={styles.input}
            value={cardholderName}
            onChangeText={setCardholderName}
            placeholder="Ali Madiyar"
          />

          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            value={cardNumber}
            onChangeText={setCardNumber}
            placeholder="1234 5678 9123 45"
            keyboardType="numeric"
          />
          {cardError ? <Text style={styles.error}>{cardError}</Text> : null}

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Expiration Date</Text>
              <TextInput
                style={styles.input}
                value={expirationDate}
                onChangeText={setExpirationDate}
                placeholder="12/24"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.label}>CVV</Text>
              <TextInput
                style={styles.input}
                value={cvv}
                onChangeText={setCvv}
                placeholder="777"
                keyboardType="numeric"
                secureTextEntry
              />
            </View>
          </View>

          <Text style={styles.label}>Country</Text>
          <TextInput
            style={styles.input}
            value={country}
            onChangeText={setCountry}
            placeholder="United States"
          />

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>City</Text>
              <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity}
                placeholder="New York"
              />
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.label}>State</Text>
              <TextInput
                style={styles.input}
                value={state}
                onChangeText={setState}
                placeholder="Alaska"
              />
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Zip Code</Text>
              <TextInput
                style={styles.input}
                value={zipCode}
                onChangeText={setZipCode}
                placeholder="1000"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmPayment}
      >
        <Text style={styles.confirmButtonText}>Confirm button</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FECB4B',
    paddingHorizontal: 25
  },
  circle: {
    width: 600,
    height: 600,
    borderRadius: 300,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 60,
    marginLeft: -110
  },
  backButton: {
    justifyContent: 'center'
  },
  backButtonText: {
    fontSize: 50,
    color: '#fff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000'
  },
  form: {
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    marginBottom: 40
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 14
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  halfInput: {
    flex: 1,
    marginRight: 10
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10
  },
  confirmButton: {
    backgroundColor: '#000',
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  }
})

export default PaymentInfo
