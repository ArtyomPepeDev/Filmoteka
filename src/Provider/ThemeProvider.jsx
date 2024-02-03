import React, { useState } from 'react'
import { useEffect } from 'react'
import { ThemeProvider as ThemeProviderSc } from 'styled-components'

const darkTheme = {
  bg: '#141414',
  text: '#fff',
  border: '#fff',
  close: '#fff',
  footerBg: '#0c0c0c',
}

const lightTheme = {
  bg: '#fff',
  text: '#000',
  border: '#000',
  close: '#000',
  footerBg: '#f7f7f7',
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
