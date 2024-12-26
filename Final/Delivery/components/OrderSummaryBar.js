import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Animated
} from 'react-native'
import { useCart } from '../context/CartContext'
import { useNavigation } from '@react-navigation/native'

const OrderSummaryBar = () => {
  const { cart, addToCart, removeFromCart } = useCart()
  const navigation = useNavigation()
  const [isExpanded, setIsExpanded] = useState(false)
  const [heightAnimation] = useState(new Animated.Value(70))

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
    Animated.timing(heightAnimation, {
      toValue: isExpanded ? 70 : 300,
      duration: 300,
      useNativeDriver: false
    }).start()
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <Animated.View style={[styles.container, { height: heightAnimation }]}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.title}>Ваш заказ:</Text>
        <Text style={styles.price}>{totalPrice.toLocaleString()} ₸</Text>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.details}>
          <View style={cart.length > 3 && styles.scrollableFlatList}>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <View style={styles.quantityControl}>
                    <TouchableOpacity
                      onPress={() => removeFromCart(item.id)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityText}>−</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityCount}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        addToCart(item)
                      }}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.itemPrice}>
                    {(item.price * item.quantity).toLocaleString()} ₸
                  </Text>
                </View>
              )}
              showsVerticalScrollIndicator={cart.length > 3}
            />
          </View>
          <View style={{ marginTop: 'auto' }}>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={() => navigation.navigate('PaymentScreen')}
            >
              <Text style={styles.orderButtonText}>Заказать</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 100,
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderColor: '#fff',
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#262626',
    height: 70
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FECB4B'
  },
  toggle: {
    fontSize: 18,
    color: '#fff'
  },
  details: {
    backgroundColor: '#1F1F1F',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderTopWidth: 1,
    borderColor: '#444',
    paddingTop: 8
  },
  itemName: {
    fontSize: 14,
    color: '#fff',
    flex: 2
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  scrollableFlatList: {
    maxHeight: 130,
    overflow: 'scroll'
  },
  quantityButton: {
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 2
  },
  quantityText: {
    color: '#fff',
    fontSize: 16
  },
  quantityCount: {
    marginHorizontal: 10,
    color: '#fff',
    fontSize: 14
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FECB4B',
    flex: 1,
    textAlign: 'right'
  },
  removeButton: {
    fontSize: 18,
    color: '#F00',
    marginLeft: 10
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 10
  },
  totalText: {
    fontSize: 16,
    color: '#fff'
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FECB4B'
  },
  orderButton: {
    marginTop: 20,
    backgroundColor: '#FECB4B',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  orderButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
  }
})

export default OrderSummaryBar
