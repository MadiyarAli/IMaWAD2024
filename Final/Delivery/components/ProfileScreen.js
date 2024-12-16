import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is your Profile!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title:{
    fontSize: 12
  },
})

export default ProfileScreen
