import React from 'react'
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Conditionally set the basename for local vs. production builds
const basename = process.env.NODE_ENV === 'production'
  ? '/shreejitcheela/'
  : '/'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()