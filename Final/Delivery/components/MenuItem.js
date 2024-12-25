import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useCart } from '../context/CartContext'

const MenuItem = ({ item }) => {
  const { addToCart } = useCart()

  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.priceBackground}>
        <Text style={styles.price}>{item.price} ₸</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.rating}>⭐{item.rating}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Добавить в заказ</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 35,
    borderColor: 'rgba(254,203,75, 0.2)',
    borderWidth: 1,
    alignItems: 'center',
    width: 370,
    marginVertical: 20,
    flex: 1
  },
  image: {
    height: 120,
    borderRadius: 10,
    width: 370
  },
  priceBackground: {
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 1,
    right: 21,
    top: 10,
    borderRadius: 360,
    paddingHorizontal: 10
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  rating: {
    position: 'absolute',
    right: 17
  },
  description: {
    fontSize: 14,
    color: 'rgba(144,144,144,0.5)'
  },
  button: {
    backgroundColor: '#FECB4B',
    borderRadius: 16,
    width: 132,
    height: 48,
    justifyContent: 'center',
    marginVertical: 6
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  }
})

export default MenuItem
