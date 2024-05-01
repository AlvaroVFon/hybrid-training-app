'use client'
import { useState, useEffect, createContext, useContext } from 'react'

const SessionContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
})

export default function SessionProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <SessionContext.Provider value={{ user, login, logout }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)
