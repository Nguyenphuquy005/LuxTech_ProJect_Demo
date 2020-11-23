
import React, { useEffect, useState } from 'react';
import User from '../../models/User';
import { useForm } from 'react-hook-form';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Sign from "../signup/Sign_up"
import axios from 'axios';
import cookie from 'react-cookies'
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
const HomePage = () => {
    let [user, setuser] = useState([]);
    const history = useHistory();
    useEffect(() =>
        setuser(cookie.load('user')), []);



    function logout() {
        cookie.remove('user', { path: '/' })
        history.push('/')
    }

    return <div className="login-container">

        <h1>Welcome HomePage {user.userName}</h1>
        <div>
            {/* <Link to="/" >Logout</Link> */}
            <Button onClick={logout}>LogOut</Button>
        </div>
    </div>
};
export default HomePage;
