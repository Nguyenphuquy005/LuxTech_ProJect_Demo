
import React, { useState, useEffect } from 'react';
import User from '../../models/User';
import { useForm } from 'react-hook-form';
import { BrowserRouter, Link, Route, useHistory, withRouter } from 'react-router-dom';
import Sign from "../signup/Sign_up"
import axios from 'axios';
import { useParams } from "react-router-dom";
const UpdatePassWord = () => {
    const { resertPasswordToken } = useParams();
    let [result, setresult] = useState([])
    useEffect(() => {

    }, [])

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();


    const onSubmit = data => {
        if (data.passWord != data.passWord2) {
            setresult("PassWords do not match")
        } else {
            console.log(resertPasswordToken, "==>")

            axios.post(`http://localhost:9000/api/users/resertPasswordToken/${resertPasswordToken}`, data.passWord).then(res => {
                console.log(res.data._id)
                axios.put(`http://localhost:9000/api/users/${res.data._id}`, { passWord: data.passWord }).then(res => {
                    console.log('ok')
                    history.push('/')
                })
            }).catch(errors => {

            })
        }
    }


    return <div className="login-container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1></h1>

            <input className="input-signup" name="passWord" type="password" placeholder="Enter new Password" ref={register({ required: true })} />
            {errors.passWord && errors.passWord.type === "required" && <p>this is required</p>}
            <input className="input-signup" name="passWord2" type="password" placeholder="Confirm PassWord" ref={register({ required: true })} />
            {errors.passWord2 && errors.passWord2.type === "required" && <p>this is required</p>}
            {result && <p>{result}</p>}


            <button className="btn btn-signup" type="submit"> Submit </button>
            <div>




            </div>

        </form>
    </div>
};

export default withRouter(UpdatePassWord);
