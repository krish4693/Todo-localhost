import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/todopage.tsx'
import './styles/todopage.css'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import { BrowserRouter, Route, Router, Routes,redirect } from 'react-router-dom'
import { redirect } from 'react-router'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Signup/>
     */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/newuser' element={<Signup />}/>
        <Route path='/todos' element={<App/>}/>
        
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
