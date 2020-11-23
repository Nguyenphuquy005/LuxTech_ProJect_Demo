import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './components/employee/Employee';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import TodoRedux from './components/todo/TodoRedux'
import thunk from "redux-thunk";
import reducer from 'Redux/employeeRedux/reducer'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Redux/todo/indextodo'
import VisibleTodoList from './components/todo/VisibleTodoList';

import PhotoForm from 'components/phooApp/PhotoForm';
import storePhoto from 'components/phooApp/PhotoStore'



const store = createStore(reducer, applyMiddleware(thunk));

const storetTodo = configureStore({
    reducer: rootReducer
})
class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <div>
                    <Provider store={store}>
                        <Employee />
                    </Provider>
                </div>

                <div>
                    <header className="App-header">
                        <h1 className="App-title">Redux TooKit</h1>
                    </header>
                    <Provider store={storetTodo}>
                        <TodoRedux />
                        <VisibleTodoList />
                    </Provider>

                </div> */}
                <div>
                    <Provider store={storePhoto}>
                        <PhotoForm />
                    </Provider>

                </div>

            </div>
        );
    }
}

export default App;