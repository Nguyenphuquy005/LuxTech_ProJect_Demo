import './Login.css';
import React, { useState } from 'react';
import User from '../../models/User';
import { useForm } from 'react-hook-form';
import { BrowserRouter, Link, Route, useHistory, withRouter } from 'react-router-dom';
import Sign from "../signup/Sign_up"
import axios from 'axios';
import cookie from 'react-cookies'
const Login = () => {
    let [user, setuser] = useState([]);
    let [checkvali, setcheckvali] = useState(false)
    const [result, setResult] = useState(null)
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();


    const onSubmit = data => {
        console.log(user._id, '===>')
        console.log(data)
        axios.post(`http://localhost:9000/api/users/login/${data.username}/${data.password}`)
            .then(res => {
                console.log('id:', res.data);
                setuser(res.data)
                console.log(user)

                cookie.save('user', res.data, { path: '/' })
                history.push("/home");
            })
            .catch(errors => {
                console.log(errors.response.data.message)
                setResult(errors.response.data.message)

            })
    }


    return <div className="login-container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Welcome to Supper club</h1>
            <input className="input-signup" name="username" type="text" placeholder="Username or email" ref={register({ required: true })} />
            {errors.username && errors.username.type === "required" && <p>this is required</p>}
            {errors.username && errors.username.type === "minlength" && <p>this is field required min leight of 2</p>}
            <input className="input-signup" name="password" type="password" placeholder="Password" ref={register({ required: true })} />

            {errors.password && errors.password.type === "required" && <p>this is required</p>}

            {
                result && <p>{result}</p>
            }

            <button className="btn btn-signup" type="submit"> LOGIN </button>
            <div>

                <Link to="/signup" > or Sign</Link>
                <br />
                <Link to="/forgotPassWord" > Forgot password</Link>


            </div>

        </form>
    </div>
};

export default withRouter(Login);
