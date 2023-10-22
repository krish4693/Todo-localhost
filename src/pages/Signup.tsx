import React, { useEffect, useRef, useState } from 'react';
import '../styles/Signup.css'
import Login from './Login';
import ToDoPage from './todopage'
import { Link } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import { HiArrowRight } from 'react-icons/hi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
      setRegistrationMessage('Username already exists!.');

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
    setRegistrationMessage('Registration Successful');
      toast.success('Registration successfull', {
        position: toast.POSITION.TOP_RIGHT
      });

  };

  return (
    <div className='signupWrapperMain'>
      <form onSubmit={handleSignUp} >
        <div className='signupWrapper'>
          <div className="signup-intro">
            <h1>Welcome 🐼</h1>
            <h2>Let's get started!!!</h2>
          </div>
          <div className="signupComponent">
            <h2 className='signupHeader'> New Member</h2>
            <div className="input-body">
              <div className="input-wrapper">
              <FaUserTie className="input-icon" />

                <input
                type='text'
                id='username'
                name='username'
                value={formData.username}
                onChange={handleChange}
                required placeholder='username'
              />
              </div>
              
              <div className="input-wrapper">
              <RiLockPasswordFill className="input-icon" />
                 <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                required placeholder='password'
              />
              </div>
              <div className="input-wrapper">
                <MdEmail className="input-icon"/>
                <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required placeholder='email'
              />
              </div>







            </div>
            <button type='submit' className='signup-btn'>Sign Up</button>
            <Link to='/' className='login-link'>
                <div>Already a User? Log In:<HiArrowRight className="bottom-login-arrow" /></div>
              </Link>
            <div>{registrationMessage}</div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default SignupPage;
