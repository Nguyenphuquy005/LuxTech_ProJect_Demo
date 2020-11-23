import { createSlice } from '@reduxjs/toolkit'

const photoList = [
    {
        id: 1,
        name: 'Viet dep trai',
        adress: 'Tamky'
    }
]
const photo = createSlice({
    name: 'photos',
    initialState: photoList,
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload)

        }
        ,
        removePhoto: (state, action) => {
            console.log(action.payload, 'payload');
            const removePhotoId = action.payload
            state = state.filter(photo => photo.id !== removePhotoId)
            return state
        },
        updatePhoto: (state, action) => {
            const newphoto = action.payload
            console.log(action.payload, 'payload');
            const photoIndex = state.findIndex(photo => photo.id == newphoto.id)

            if (photoIndex >= 0) {
                console.log('1');
                state[photoIndex] = newphoto
                console.log(state, 'state');
            }

        }
    }
})

const { reducer, actions } = photo
export const { addPhoto, removePhoto, updatePhoto } = actions
export default reducer;
