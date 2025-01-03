import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import MenuCategory from '../components/MenuCategory'
import MenuItem from '../components/MenuItem'
import { MENU_ITEMS } from '../data/menu'
import { useCart } from '../context/CartContext'

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const { cart } = useCart()

  const filteredItems =
    selectedCategory === ''
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory)

  return (
    <View
      style={[styles.container, { marginBottom: cart.length > 0 ? 120 : 60 }]}
    >
      <Text style={styles.header}>Категории</Text>

      <MenuCategory
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MenuItem item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10
  },
  list: {
    paddingBottom: 20
  }
})

export default HomeScreen
