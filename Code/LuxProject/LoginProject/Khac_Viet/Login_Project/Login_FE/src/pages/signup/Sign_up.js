import React, { useState } from 'react';
import './Sign_up.css'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const Sign = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = data => {
        console.log("data: " + data);
    }
    let comfirmPasss = watch("password");
    return (
        <div className="sign-up-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Welcome to Supper club</h1>

                <input className="input-signup" name="username" type="text" placeholder="Username or email" ref={register({ required: true, minLength: 2 })} />

                {errors.username && errors.username.type === "required" && <p>this is required</p>}
                {errors.username && errors.username.type === "minlength" && <p>this is field required min leight of 4</p>}
                <input className="input-signup" type="password" name="password" placeholder="Password" ref={register({ required: true, minLength: 5 })} />

                {errors.password && errors.password.type === "required" && <p>this is required</p>}

                <input className="input-signup" type="password" name="confirmPassword" placeholder="Confirm password" ref={register({ validate: value => value === comfirmPasss || "The passwords do not match" })} />

                {errors.confirmPassword && <p> {errors.confirmPassword.message}</p>}

                <button type="submit">
                    Create Account
                    </button>
                <div>
                    <Link to="/login"> or Login</Link>
                </div>
            </form>
        </div>
    );
};
export default Sign;