import { combineReducers } from 'redux'
import todosReduccer from './SliceTodo'
import visibilityFilterReducer from './fifltersSlice'

export default combineReducers({
    todos: todosReduccer,
    visibilityFilter: visibilityFilterReducer
})

