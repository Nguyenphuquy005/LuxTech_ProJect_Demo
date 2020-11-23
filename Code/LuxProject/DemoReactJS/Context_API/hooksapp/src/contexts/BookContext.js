import React, { createContext, useState, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { bookReducer } from '../reducers/bookReducer'
export const BookContext = createContext();

const BookContextProvider = (props) => {
    // const [books, setBooks] = useState([
    //     { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    //     { title: "the final emprire", author: 'brandon sanderson', id: 2 }
    // ])

    // const addBook = (title, author) => {
    //     setBooks([...books, { title, author, id: uuidv4() }])
    // }
    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id))
    //     console.log(books, '====>')
    // }
    const [books, dispatch] = useReducer(bookReducer, [{ title: 'name of the wind', author: 'patrick rothfuss', id: 1 }])

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider