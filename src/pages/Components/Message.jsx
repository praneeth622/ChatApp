import React from 'react';

function Message() {
    return (
        <div className="messages">
            <div className='message owner'>
                <div className="messageInfo">
                    <img src='https://picsum.photos/200' alt='Profile' />
                    <span>Just now</span>
                </div>
                <div className="messageContent">
                    <p>Hello</p>
                    {/* <img src="https://picsum.photos/200" alt=""  /> */}
                </div>
            </div>
        </div>
    );
}

export default Message;