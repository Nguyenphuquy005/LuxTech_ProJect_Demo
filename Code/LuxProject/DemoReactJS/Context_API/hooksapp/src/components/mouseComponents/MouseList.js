import React, { useContext } from 'react'
import { Mousecontext } from '../../contexts/MouseContext';
import MouseDetails from './MouseDetails'
const MouseList = () => {
    const { mouses } = useContext(Mousecontext)
    return (
        <div className='book-list'>
            <h1>Welcome mouses family whih {mouses.length} people</h1>
            <ul>
                {mouses.map(mouse => {
                    return (<MouseDetails mouse={mouse} key={mouse.id} />)
                })}
            </ul>
        </div>
    );
}

export default MouseList;