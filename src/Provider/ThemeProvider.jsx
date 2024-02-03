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
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  const theme = isDarkMode ? darkTheme : lightTheme

  useEffect(() => {
    console.log(theme)
  }, [isDarkMode])

  return (
    <ThemeProviderSc theme={{ colors: theme, toggleTheme }}>
      {children}
    </ThemeProviderSc>
  )
}
