import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from '../firebase';
import { Link } from 'react-router-dom';

function Login(props) {
    const [error, setError] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try{
            const res = await signInWithEmailAndPassword(auth, email, password)
            const user = res.user
            // console.log(user)
            console.log("Login Sucess")
            navigate('/')
        }
        catch(err){
            console.log("Got Error in login")
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(err)
            setError(err)
        }
    }
    
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>OurChat</span>
                <span className='title'>Login</span>
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder='Enter Your Email'/>
                    <input type='password' placeholder='Enter Your Password' />
                    <button type='submit'>Sign Up</button>
                </form>
                {error && <span>Something went wrong</span>}
                <p>New User ? <Link to="/register">Sign Up</Link></p>

            </div>
        </div>
    );
}

export default Login;