import React from 'react'
import { StatusBar } from 'react-native'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import Router from './Router'

import { LogBox } from 'react-native'

LogBox.ignoreAllLogs(true)

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <StatusBar />
        <Router />
      </CartProvider>
    </AuthProvider>
  )
}
