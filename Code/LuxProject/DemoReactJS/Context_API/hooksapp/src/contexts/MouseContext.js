import React, { useState, useReducer, useEffect, createContext } from 'react'
import { getAllMices, addMouse, removeMouse } from '../api/mice'
export const Mousecontext = createContext();
const MousecontextProvider = (props) => {

    const [mouses, setMouses] = useState([])
    useEffect(() => {
        getAllMices()
            .then(data => setMouses(data))
            .catch(err => {
                console.log(err)
            })
    }, [])
    // const addMouse = (name, adress) => {
    //     axios.post('/mice', { name: name, adress: adress, id: 13 }).then(res => {
    //         console.log('thanh cong', res);
    //         const newMouse = res.data;
    //         setMouses(oldMouses => [
    //             ...oldMouses,
    //             newMouse
    //         ])
    //     }).catch(err => {
    //         console.log(name, '__', adress);
    //     })
    // }

    const handleAddMouse = (name, address) => {
        addMouse(name, address)
            .then(data => {
                setMouses(old => [
                    ...old,
                    data
                ])
            })
            .catch(console.log)
    }



    const handleremoveMouse = (id) => {
        removeMouse(id).then(data => {
            setMouses(mouses.filter(mouse => mouse.id != id))
        })
    }

    return (
        <Mousecontext.Provider value={{ mouses, handleAddMouse, setMouses, handleremoveMouse }}>
            {props.children}
        </Mousecontext.Provider>)
}

export default MousecontextProvider
