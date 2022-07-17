import React, { useRef } from 'react'
import { auth } from '../../firebase';
import './signUp.css'

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((err) => { alert(err) })
  };

  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((err) => { alert(err) })
};
return (
  <div className='signUpScreen'>
    <form className='form'>
      <h1>Sign In</h1>
      <input ref={emailRef} type="email" name="" id="" placeholder='Email' />
      <input ref={passwordRef} type="password" name="" id="" placeholder='Password' />
      <button type="submit" onClick={signIn}>Sign In</button>
      <h4><span className='gray'>New To Netflix ?  </span>
        <span className='link' onClick={register}>Sign Up now.</span> </h4>
    </form>
  </div>
)
}

export default SignUpScreen