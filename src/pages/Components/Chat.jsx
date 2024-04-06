import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faUserPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Messsage from './Message';
import Input from './Input';
function Chat(props) {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>john</span>
                <div className="chatIcons">
                <FontAwesomeIcon icon={faVideo} />
                <FontAwesomeIcon icon={faUserPlus} />
                <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </div>
            <Messsage />
            <Input />
        </div>
    );
}

export default Chat;