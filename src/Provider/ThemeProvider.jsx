import React, { useState } from 'react'
import { ThemeProvider as ThemeProviderSc } from 'styled-components'

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  const darkTheme = {
    bg: '#141414',
    text: '#fff',
  }

  const lightTheme = {
    bg: '#fff',
    text: '#000',
  }

  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeProviderSc theme={{ theme, toggleTheme }}>{children}</ThemeProviderSc>
  )
}
