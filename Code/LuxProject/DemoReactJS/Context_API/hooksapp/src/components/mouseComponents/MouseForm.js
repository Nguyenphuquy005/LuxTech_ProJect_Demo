import React, { useContext, useState } from 'react'
import { Mousecontext } from '../../contexts/MouseContext';


const NewMouseForm = () => {
    const { handleAddMouse, setMouses } = useContext(Mousecontext)
    const [name, setName] = useState('')
    const [adress, setAdress] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        // addBook(title, author);
        handleAddMouse(name, adress)
        setName('');
        setAdress('')
    }
    return (
        <div className='book-list'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Mouse Name' value={name}
                    onChange={(e) => setName(e.target.value)} required />
                <input type='text' placeholder='mouse adress' value={adress}
                    onChange={(e) => setAdress(e.target.value)} required />
                <input type='submit' value='add new mouse' />

            </form>
        </div>
    );
}

export default NewMouseForm;