import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom"; 
function Register() {
    const [error, setError] = useState(false);
    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            // console.log(user);

            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    setError(true);
                },
                async () => {
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                        // Update profile
                        await updateProfile(user, {
                            displayName,
                            photoURL: downloadURL,
                        });

                        // Create user on firestore
                        await setDoc(doc(db, "users", user.uid), {
                            uid: user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });
                        console.log("Data Stored in database successfully")
                        // Create empty user chats on firestore
                        await setDoc(doc(db, "userChats", user.uid), {

                        });
                        // history.push('/');
                        navigate('/')


                        // Navigation logic here
                    } catch (err) {
                        console.log(err);
                        setError(true);
                    }
                }
            );
        } catch (err) {
            console.log("We Got An Error in saving user ", err);
            setError(true);
        }
    };

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
                <p>Already Existing User, <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
}

export default Register;
