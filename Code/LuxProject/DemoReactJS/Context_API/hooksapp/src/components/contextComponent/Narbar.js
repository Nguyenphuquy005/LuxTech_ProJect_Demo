import React, { useContext } from 'react'
import { BookContext } from '../../contexts/BookContext';

const Narbar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className='narbar'>
            <h1>Ninja reading List</h1>
            <p>Currently you have {books.length} books to get Through...</p>
        </div>
    );
}

export default Narbar;