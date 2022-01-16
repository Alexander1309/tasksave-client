import React from 'react'
import ReactDOM from 'react-dom'
import { AuthProvider } from './contexts/authContext'
import Router from './Router'

ReactDOM.render(
  <AuthProvider>
    <Router />
  </AuthProvider>,
  document.getElementById('root')
)
