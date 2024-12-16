import React from 'react'
import { StatusBar } from 'react-native';
import { AuthProvider } from './AuthContext'
import Router from './Router'

export default function App() {
  return (
    <AuthProvider>
      <StatusBar />
      <Router />
    </AuthProvider>
  )
}
