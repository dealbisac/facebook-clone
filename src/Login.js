import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

function Login() {
    const signIn = () => {
        //sign in code..
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                    alt="Logo"
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt="Signin"
                />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>

        </div>
    )
}

export default Login
