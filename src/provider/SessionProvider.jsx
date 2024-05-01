'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const SessionContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
})

export default function SessionProvider({ children }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const user = sessionStorage.getItem('user')
      ? JSON.parse(sessionStorage.getItem('user'))
      : null
    setUser(user)
  }, [])

  const login = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const logout = () => {
    setUser(null)
    sessionStorage.removeItem('user')
  }

  return (
    <SessionContext.Provider value={{ user, login, logout }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)
