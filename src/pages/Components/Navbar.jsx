import React from 'react';

function Navbar(props) {
    return (
        <div className='navbar'>
            <span className='logo' > OurChat</span>
            <div className="user">
                <img src='https://picsum.photos/200' alt='Profile Pic' />
                <span>John</span>
                <button>logout</button>
            </div>
        </div>
    );
}

export default Navbar;