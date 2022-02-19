import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from 'Themes'
import { Home } from 'Pages/Home/Home'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  )
}
