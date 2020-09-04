import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyle from './styles/global'
import MainRoutes from './Routes'

import DefaultTheme from './styles/themes/default'

import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Router>
          <MainRoutes />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
