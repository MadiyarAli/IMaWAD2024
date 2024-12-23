import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AuthContext } from './context/AuthContext'
import HomeScreen from './components/HomeScreen'
import ProfileScreen from './components/ProfileScreen'
import LoginScreen from './components/LoginScreen'

import ReceiptLong from './assets/TabIcons/ReceiptLong'
import Menu from './assets/TabIcons/Menu'
import ContactPhone from './assets/TabIcons/ContactPhone'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarActiveTintColor: '#FECB4B',
        headerShown: false,
        tabBarIconStyle: {
          marginTop: 14
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#262626',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          elevation: 0,
          shadowColor: 'transparent',
          borderTopWidth: 0,
          height: 70
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.tab}>
              <Menu color={color} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.tab}>
              <ContactPhone color={color} />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

const Router = () => {
  const { isLoggedIn } = React.useContext(AuthContext)

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoggedIn ? (
            <>
              <Stack.Screen name="Tabs" options={{ headerShown: false }}>
                {() => {
                  return <BottomTabs />
                }}
              </Stack.Screen>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarLabel: 'Home' }}
              />
              <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profile' }}
              />
            </>
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tab: {
    marginTop: 8,
    alignItems: 'center'
  }
})

export default Router
