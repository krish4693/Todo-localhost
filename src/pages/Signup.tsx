import React, { useEffect, useRef, useState } from 'react';
import '../styles/Login.css'
import Login from './Login';

interface LoginProps {
    // Define your props here if needed
}

const Signup: React.FC<LoginProps> = () => {
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const [showHome,setShowHome]=useState(false)
    const localSignUp=localStorage.getItem("signUp")

    useEffect(()=>{

    })

    const handleSignUp = () => {
        // Access values using refs
        const nameValue = name.current?.value;
        const emailValue = email.current?.value;
        const passwordValue = password.current?.value;
        if (nameValue && emailValue && passwordValue) {
            localStorage.setItem("name",nameValue)
            localStorage.setItem("email",emailValue)
            localStorage.setItem("password",passwordValue)
            localStorage.setItem("signUp",emailValue)
            console.log(nameValue)
            console.log(emailValue)
            console.log(passwordValue)
            alert("Account created successfully")
        }
        else{
            alert("Give a valid info idiot")
        }

        // Do something with the values
    };

    return (
        <>
            <div className='loginComponent'>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' placeholder="Enter your name" ref={name} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email" ref={email} />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder="Enter your password" ref={password} />
                <button onClick={handleSignUp}>SignUp</button>
            </div>
        </>
    );
};

export default Signup;