import React from 'react'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  //DONT FORGET TO PUT TO FALSE
  const [isLoggedIn, setIsLoggedIn] = React.useState(true)

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}
