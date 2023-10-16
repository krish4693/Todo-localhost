import React, { useState } from 'react';
import App from './todopage.tsx'
import { Link } from 'react-router-dom';
import '../styles/Login.css';


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
      alert('Login Sucessfull')
      localStorage.setItem("loggeduser",formData.username)
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
        <nav className="navBar">
        <ul>
          <li>
            <Link to="/newuser">
            <button>SignUp</button>
            </Link>

          </li>
        </ul>
      </nav>
    {/* <main ></main> */}
    <div className='loginWrapper'>
      <form onSubmit={handleLogin} className='loginWrapper'>
          <div className='loginComponent'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type='submit'>Login</button>
            <div>{loginMessage}</div>
          </div>
        </form>
    </div>
        
      </div>
    )
  );
};

export default LoginPage;

