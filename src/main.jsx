import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import PWAManager from './components/PWAManager.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router />
      <PWAManager />
    </ThemeProvider>
  </StrictMode>,
)
