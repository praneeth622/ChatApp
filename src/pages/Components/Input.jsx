import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faImage } from '@fortawesome/free-solid-svg-icons'; // Import specific icons


function Input(props) {
    return (
        <div className='input'>
            <input type='text'/>
            <div className="send">
                <input type='file' style={{display:"none"}} id='file' />
                <label htmlFor='file'>
                <FontAwesomeIcon icon={faPaperclip} /> 
                <FontAwesomeIcon icon={faImage} />
                </label>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Input;