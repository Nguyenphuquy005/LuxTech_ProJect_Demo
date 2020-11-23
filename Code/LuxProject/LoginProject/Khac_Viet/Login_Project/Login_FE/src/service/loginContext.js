import React from 'react'
import User from '../models/User'
var LoginContext = React.createContext();
class LoginProvider extends React.Component {
    state = 10;
    render() {
        return <LoginContext.Provider value={this.state}>this.props.children</LoginContext.Provider>
    }
}