import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import axios from 'axios';

const ForgotPassWord = () => {
    const { handleSubmit, register, errors } = useForm();
    let [result, setresult] = useState(null)
    const onSubmit = data => {
        setresult(null)
        axios.post(`http://localhost:9000/api/users/forgotPW/`, {
            email: data.email
        })
            .then(res => {
                setresult(res.data.message)
                console.log({ res })
            })
            .catch(errors => {
                console.log({ errors })
                setresult(errors.response.data.message)
            })
    };


    return <div className="login-container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Your email</h1>
            <input
                className="input-signup"
                name="email"
                ref={register({
                    required: <p>this is required</p>,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        // message: "invalid email address"
                        message: <p>invalid email address</p>
                    }
                })}
            />

            {errors.email && errors.email.message}
            {result && <p>{result}</p>}
            <br />
            <button className="btn btn-signup" type="submit"> Submit </button>
            <br />
            <div>

                <Link to="/" >Go Home</Link>


            </div>

        </form>
    </div>
};
export default ForgotPassWord;
