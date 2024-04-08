import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const Chats = () => {
    const [chats, setChats] = useState([]);
  
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
  
    useEffect(() => {
      const getChats = () => {
        const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
          setChats(doc.data());
        });
  
        return () => {
          unsub();
        };
      };
  
      currentUser.uid && getChats();
    }, [currentUser.uid]);
    console.log(chats)
    console.log(Object.entries(chats))
    return (
        <div>
            <h1>Hi There </h1>
            
            
        </div>
    );
}

export default Chats;