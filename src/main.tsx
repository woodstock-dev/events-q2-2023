import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import './main.css'
import { Provider } from 'react-redux'

import store from './store.tsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
)
