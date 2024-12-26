import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image
} from 'react-native'
import { useCart } from '../context/CartContext'
import { useNavigation } from '@react-navigation/native'

const PaymentScreen = () => {
  const { cart } = useCart()
  const [tipPercentage, setTipPercentage] = useState(0)
  const navigation = useNavigation()

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const tipAmount = (totalAmount * tipPercentage) / 100
  const finalAmount = totalAmount + tipAmount

  const handleTipSelect = (percentage) => {
    setTipPercentage(percentage)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Мой заказ</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>
              {(item.price * item.quantity).toLocaleString()} ₸
            </Text>
          </View>
        )}
        ListFooterComponent={<View style={styles.divider} />}
      />

      <View style={styles.tipSection}>
        <Text style={styles.sectionHeader}>Чаевые</Text>
        <View style={styles.waiterInfo}>
          <Image
            source={require('../assets/Person.png')}
            style={styles.image}
          />
          <View>
            <Text style={styles.waiterName}>Официант</Text>
            <Text style={styles.waiterSubtext}>Маша</Text>
          </View>
        </View>
        <View style={styles.tipContainer}>
          <Text style={styles.tipAmount}>{tipAmount.toLocaleString()} ₸</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.tipOptions}>
          {[0, 10, 15, 20, 25].map((percentage) => (
            <TouchableOpacity
              key={percentage}
              style={[
                styles.tipButton,
                tipPercentage === percentage && styles.tipButtonSelected
              ]}
              onPress={() => handleTipSelect(percentage)}
            >
              <Text style={styles.tipText}>{percentage}%</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.discountSection}>
        <View style={styles.totalRow}>
          <Text style={styles.sectionHeader}>Чаевые</Text>
          <Text style={styles.discountAmount}>
            {tipAmount.toLocaleString()} ₸
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Итого к оплате</Text>
          <Text style={styles.totalAmount}>
            {finalAmount.toLocaleString()} ₸
          </Text>
        </View>
      </View>

      {/* Pay Button */}
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate('PaymentInfo')}
      >
        <Text style={styles.payButtonText}>Оплатить</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 60
  },
  tableNumber: {
    fontWeight: 'normal'
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemPrice: {
    fontSize: 16
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginVertical: 10
  },
  tipSection: {
    marginVertical: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  waiterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFD700',
    marginRight: 10
  },
  waiterName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  waiterSubtext: {
    fontSize: 14,
    color: '#7D7D7D'
  },
  tipContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tipAmount: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  tipOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  tipButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 360,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tipButtonSelected: {
    backgroundColor: '#FECB4B',
    borderColor: '#FECB4B'
  },
  tipText: {
    fontSize: 14
  },
  discountSection: {
    marginVertical: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10
  },
  discountText: {
    fontSize: 14,
    color: '#FECB4B',
    textAlign: 'center',
    marginBottom: 10
  },
  discountAmount: {
    fontSize: 16,
    marginVertical: 5
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  payButton: {
    backgroundColor: '#FECB4B',
    borderRadius: 19,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  }
})

export default PaymentScreen
