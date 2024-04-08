import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';


function Navbar(props) {
    const {currentUser} = useContext(AuthContext);
    console.log(currentUser)
    return (
        <div className='navbar'>
            <span className='logo' > OurChat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt='Profile Pic' />
                <span>{currentUser.displayName}</span>
                <button onClick={()=>{
                    signOut(auth)
                    console.log(auth)
                }}>logout</button>
            </div>
        </div>
    );
}

export default Navbar;