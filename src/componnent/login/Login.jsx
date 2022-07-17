import React from 'react'
import { useState } from 'react';
import './login.css';
import SignUpScreen from './signUpScreen.jsx';

function Login() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className='login'>
            <div className="login_background">
                <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" />
                <button onClick={() => { setSignIn(true) }} className='login_button'>Sign In</button>
                <div className="login_backDark"></div>
                {signIn ? (
                    <SignUpScreen/>
                ) : (
                    <div className="login_body">
                        <h1>Unlimited Films,TV programs and more.</h1>
                        <h2>Watch anywhere.Cancle at any time</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                        <div className="login_input">
                            <form >
                                <input className='btn-emailAddress' type="email" name="" id="" placeholder='Email Address' />
                            </form>
                            <button onClick={() => { setSignIn(true) }} className='btnLogin_getStarted'>Get started</button>
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default Login