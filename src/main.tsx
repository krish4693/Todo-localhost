import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/todopage.tsx'
import './styles/todopage.css'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Signup/>
     */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path='/newuser' element={<Signup />}>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
