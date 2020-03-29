import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../../helpers'

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeWrapper
