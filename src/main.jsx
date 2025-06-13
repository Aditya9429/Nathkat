import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import ShopContext from './context/ShopContext.jsx'
import GlobalState from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter >
    <GlobalState>
    <App />
    </GlobalState>
    </HashRouter>
  </StrictMode>,
)
