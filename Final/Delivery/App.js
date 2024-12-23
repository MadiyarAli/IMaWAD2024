import React from 'react'
import { StatusBar } from 'react-native'
import { AuthProvider } from './AuthContext'
import { CartProvider } from './CartContext'
import Router from './Router'

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
