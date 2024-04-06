import React, { useState } from 'react';
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Register(props) {
    const [error,setError]= useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try{
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user;
            console.log(user)
            const storage = getStorage();
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    setError(true)
                  }, 
                  () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                      await updateProfile(response.user,{
                        displayName,
                        photoURL:downloadURL
                      })
                    });
                  }
                );
        }
        catch(err){
            console.log("We Got An Error in saving user ", err )
            setError(true)
        }
    }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>OurChat</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Display name' />
                    <input type='email' />
                    <input type='password' />
                    <input type='file' />
                    <button type='submit'>Sign Up</button>
                </form>
                {error && <span>Something went wrong</span>}
                <p>Already Existing User, Login</p>
            </div>
        </div>
    );
}

export default Register;
