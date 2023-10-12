import React, { useEffect, useRef, useState } from 'react';
import '../styles/Login.css'
import Login from './Login';
import ToDoPage from './todopage'
import { Link } from 'react-router-dom';
interface LoginProps {
  // Define your props here if needed
}


const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // Retrieve existing user data from local storage
    const storedUsersJson = localStorage.getItem('users')
    const existingUsers = storedUsersJson ? JSON.parse(storedUsersJson) : []

    // Check if the provided username already exists
    if ((existingUsers as any[]).some((user) => user.username === formData.username)) {
      setRegistrationMessage('Username already exists. Please choose a different one.');
      return;
    }

    // Add the new user data to the existing users
    existingUsers.push(formData);

    // Store the updated array of user data in local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    setFormData({
      username: '',
      password: '',
      email: '',
    });

    setRegistrationMessage('Registration successful!');
  };

  return (
    <div>
      <nav className="navBar">
        <ul>
          <li>
            <Link to="/">
            <button>Login</button>
            </Link>

          </li>
        </ul>
      </nav>
      <form onSubmit={handleSignUp}>
        <div className='signupComponent'>
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

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <button type='submit'>Sign Up</button>
          <div>{registrationMessage}</div>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
