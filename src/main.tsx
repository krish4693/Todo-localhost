import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/todopage.tsx'
import './styles/todopage.css'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Signup/>
  </React.StrictMode>,
)
