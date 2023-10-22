import React, { useState } from 'react';
import App from './todopage.tsx'
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import { FaUserTie } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiArrowRight } from 'react-icons/hi'


interface LoginProps {
  // Define your props here if needed
}


const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loginMessage, setLoginMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Retrieve existing user data from local storage
    const storedUsersJson = localStorage.getItem('users');
    const existingUsers = storedUsersJson ? JSON.parse(storedUsersJson) : [];

    // Check if the provided username and password match an existing user
    if ((existingUsers as any[]).some((user) => user.username === formData.username && user.password === formData.password)) {
      setLoginMessage('Login Successful');
      toast.success('Login successfull', {
        position: toast.POSITION.TOP_RIGHT
      });
      localStorage.setItem("loggeduser", formData.username)
      setIsLogin(true)


      // return;
    }
    else {
      setLoginMessage('Username or password incorrect')
      return
    }
    setFormData({
      username: '',
      password: '',
    });
    // Login successful
    // setLoginMessage('Login successful!');

  };

  return (
    isLogin ? (
      <App />
    ) : (
      <div className='loginWrapperMain'>

        <form onSubmit={handleLogin} >

          <div className='loginWrapper'>
            <div className='login-intro'>
              <h1>Welcome Back 😺 </h1>
              <h2>We Missed YOU!!!</h2>
            </div>
            <div className='loginComponent'>
              <h2 className='loginHeader'>Member Login</h2>
              <div className='input-body'>
                <div className='input-wrapper'>

                  <FaUserTie className="input-icon" />

                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                  />
                </div>
                <div className='input-wrapper'>
                  <RiLockPasswordFill className="input-icon" />
                  <input
                    type='password'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Password'
                    required
                  />
                </div>
              </div>
              {/* <div></div> */}
              <button type='submit' className='login-btn'>Login</button>
              <Link to='/newuser' className='signup-link'>
                <div>New here? Sign In:<HiArrowRight className="bottom-signup-arrow" /></div>
              </Link>
              <div>{loginMessage}</div>
            </div>
          </div>
        </form>

      </div>
    )
  );
};

export default LoginPage;

