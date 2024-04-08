import React, { useState } from 'react';
import { collection, query, where,getDocs } from "firebase/firestore";
import { db } from '../../firebase';

function Search() {
    const [userName,setUserName] = useState('')
    const [user,setUser] = useState('')
    const [Error,setError] = useState(false)

    const usersRef = collection(db, "users");

    const handleSubmit = async () => {
        const q = query(usersRef, where("displayName", "==", userName)); // Corrected field name
        try {
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    setUser(doc.data());
                    console.log(doc.data());
                });
                setError(false); 
            } else {
                setUser(null);
                setError(true);
            }
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };
    

    const handleKey=(e)=>{
        e.code === 'Enter' && handleSubmit()
        
    }
    return (
        <div className='search'>
            <div className="searchForm">
                <input type='text' placeholder='Find A User' onKeyDown={handleKey} onChange={(e)=>setUserName(e.target.value)} />
            </div>
            {Error && <span style={{color:'white',alignItems:'center'}}>User Not Found</span>}
            {user && <div className="userChat">
                <img src={user.photoURL} alt='Profile.pic' />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    );
}

export default Search;