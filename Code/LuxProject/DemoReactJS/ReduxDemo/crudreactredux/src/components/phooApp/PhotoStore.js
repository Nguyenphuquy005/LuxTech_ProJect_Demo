import { configureStore } from '@reduxjs/toolkit'
import photoReducer from 'components/phooApp/PhotoSlice'

const rootReducer = {
    photos: photoReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store