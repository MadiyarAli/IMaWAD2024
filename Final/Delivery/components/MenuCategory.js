import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DrinksIcon from '../assets/Categories/DrinksIcon'
import PizzaIcon from '../assets/Categories/PizzaIcon'
import BurgerIcon from '../assets/Categories/BurgerIcon'

const categories = [
  { id: 'pizza', icon: <PizzaIcon /> },
  { id: 'burger', icon: <BurgerIcon /> },
  { id: 'drink', icon: <DrinksIcon /> }
]

const MenuCategory = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.button,
            selectedCategory === category.id && styles.selectedButton,
            selectedCategory === category.id && styles.noBorder
          ]}
          onPress={() => {
            if (selectedCategory !== category.id) {
              setSelectedCategory(category.id)
            } else {
              setSelectedCategory('')
            }
          }}
        >
          {category.icon}
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    zIndex: 1,
    gap: 50
  },
  button: {
    padding: 10,
    borderRadius: 5,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(38,38,38,0.5)',
    borderRadius: 18
  },
  selectedButton: {
    backgroundColor: '#FECB4B'
  },
  noBorder: {
    borderWidth: 0,
  },
  text: {
    fontWeight: 'bold'
  }
})

export default MenuCategory
