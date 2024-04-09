import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faUserPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Messsage from './Message';
import Input from './Input';
import { ChatContext } from '../../context/ChatContext';
function Chat(props) {
    const {data} = useContext(ChatContext)
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
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