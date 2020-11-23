import React, { useContext } from 'react'
import { Mousecontext } from '../../contexts/MouseContext';

const MouseDetails = (mouse) => {

    const { handleremoveMouse } = useContext(Mousecontext);
    return (
        <li onClick={() => handleremoveMouse(mouse.mouse.id)}>
            <div className='title'>{mouse.mouse.name}</div>
            <div className='author'>{mouse.mouse.adress}</div>
        </li>
    );
}

export default MouseDetails;