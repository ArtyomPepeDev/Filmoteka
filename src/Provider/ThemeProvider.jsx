import React, { useState } from 'react'
import { useEffect } from 'react'
import { ThemeProvider as ThemeProviderSc } from 'styled-components'

const darkTheme = {
  bg: '#141414',
  text: '#fff',
  border: '#fff',
  close: '#fff',
}

const lightTheme = {
  bg: '#fff',
  text: '#000',
  border: '#000',
  close: '#000',
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [currentTheme])

  return (
    <ThemeProviderSc theme={{ colors: currentTheme, toggleTheme }}>
      {children}
    </ThemeProviderSc>
  )
}
