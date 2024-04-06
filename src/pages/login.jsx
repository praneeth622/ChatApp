import React from 'react';
// import '../styles/register.css'

function Login(props) {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>OurChat</span>
                <span className='title'>Login</span>
                <form>
                    <input type='email' />
                    <input type='password' />
                    <button type='submit'>Sign Up</button>
                </form>
                <p>New User ? Sign Up</p>

            </div>
        </div>
    );
}

export default Login;