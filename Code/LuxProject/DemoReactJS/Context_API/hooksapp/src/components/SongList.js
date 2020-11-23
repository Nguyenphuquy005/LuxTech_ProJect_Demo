import React, { useState, useEffect } from 'react'
// import uuid from 'uuid/v1';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';
import { useDispatch } from 'react-redux'
import { createStore } from 'redux'


const SongList = () => {

    const [songs, setSongs] = useState([
    ])
    useEffect(() => {


    }, [])

    const addSongs = (title) => {


        setSongs([...songs, { title, id: uuidv4() }]);
        console.log(songs)
    }
    const removeSong = (id) => {
        setSongs(songs.filter(song => song.id !== id))
    }
    return (
        <div className='song-list'>
            <ul>
                {songs.map(song => {
                    return (<li onClick={() => removeSong(song.id)} key={song.id}> {song.title}</li>)
                })}

            </ul>
            {/* <button onClick={addSong}>Add new Song</button> */}
            <NewSongForm addSong={addSongs} />
            <button></button>
        </div>
    )
}

export default SongList;