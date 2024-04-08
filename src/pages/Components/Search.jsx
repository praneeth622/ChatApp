import React, { useContext, useState } from 'react';
import { collection, query, where, getDocs, doc, setDoc, updateDoc, serverTimestamp,getDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

function Search() {
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    const usersRef = collection(db, "users");
    const { currentUser } = useContext(AuthContext);

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

    const handleKey = (e) => {
        e.code === 'Enter' && handleSubmit();
    };

    const handleSelect = async () => {
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, "chats", combinedId));
            if (!res.exists()) {
                // Create the chats 
                await setDoc(doc(db, "chats", combinedId), { messages: [] });
                // Update the docs
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
                setUser(null)
                setUserName('')
            } else {
                // Handle the case where the conversation already exists
            }
            console.log(res.data());
            setError(false);
        } catch (err) {
            console.log("Error in chat:", err);
            setError(true);
        }
    };

    return (
        <div className='search'>
            <div className="searchForm">
                <input type='text' placeholder='Find A User' onKeyDown={handleKey} value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            {error && <span style={{ color: 'white', alignItems: 'center' }}>User Not Found</span>}
            {user && <div className="userChat" onClick={handleSelect}>
                <img src={user.photoURL} alt='Profile.pic' />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    );
}

export default Search;
