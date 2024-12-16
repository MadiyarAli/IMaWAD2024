// src/AuthContext.js
import React from 'react'

// Create the AuthContext
export const AuthContext = React.createContext()

// AuthProvider to wrap your app
export const AuthProvider = ({ children }) => {
  //DONT FORGET TO PUT TO FALSE
  const [isLoggedIn, setIsLoggedIn] = React.useState(true)

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}
