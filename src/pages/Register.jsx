import React from 'react';
// import '../styles/register.css'

function Register(props) {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>OurChat</span>
                <span className='title'>Register</span>
                <form>
                    <input type='text' placeholder='Display name' />
                    <input type='email' />
                    <input type='password' />
                    <input type='file' />
                    <button type='submit'>Sign Up</button>
                </form>
                <p>Already Existing User , Login</p>

            </div>
        </div>
    );
}

export default Register;