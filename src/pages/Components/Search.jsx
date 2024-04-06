import React from 'react';

function Search() {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type='text' placeholder='Find A User' />
            </div>
            <div className="userChat">
                <img src='https://picsum.photos/200' alt='Profile.pic' />
                <div className="userChatInfo">
                    <span>Jone</span>
                </div>
            </div>
        </div>
    );
}

export default Search;