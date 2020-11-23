import React, { Component } from 'react';
import AddTodo from './AddTodo';


class TodoRedux extends Component {
    render() {
        return (
            <div className="App">
                <AddTodo />
            </div>
        );
    }
}

export default TodoRedux;