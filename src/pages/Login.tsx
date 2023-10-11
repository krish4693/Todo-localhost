import React from 'react';
import '../styles/Login.css'

interface LoginProps {
    // Define your props here if needed
}

const Login: React.FC<LoginProps> = () => {
    return (
        <>
            <form action=""><div className='loginComponent'>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' />
                <label htmlFor="password">Password</label>
                <input type="text" name='password' />
                <button>Login</button>
            </div>
            </form>


        </>
    );
};

export default Login;