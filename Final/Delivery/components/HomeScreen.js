import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar /> */}
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 12
  },
  input: {}
})

export default HomeScreen
