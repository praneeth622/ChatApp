import React from 'react';
import Navbar from './Navbar';
import Search from './Search';

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <Navbar />
            <Search />
        </div>
    );
}

export default Sidebar;