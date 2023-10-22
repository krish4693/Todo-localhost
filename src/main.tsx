import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/todopage.tsx'
import './styles/todopage.css'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './main.css' 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer/>
    </BrowserRouter>

  </React.StrictMode>,
)
