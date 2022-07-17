import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route,useNavigate } from 'react-router-dom';
import HomeScreen from './componnent/HomeScreen/HomeScreen';
import Login from './componnent/login/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Profile from './componnent/profile/Profile';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const navigate =useNavigate();
  
  
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if (userAuth) {
        //logged in
       // console.log(userAuth);
             dispatch(login({
              uid : userAuth.uid,
              email: userAuth.email
             }));
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return  unsubscribe;
  },[dispatch]);

  const userData = ()=>{
    if (!user) {
      navigate('/login');
    } else {
      navigate('/home');
    };
  };
  useEffect(()=>{
    userData();
  },[user]);

  return (
    <div className="App">
      <Routes>
           
          <Route path='/' element={<HomeScreen />} />
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        
      </Routes>

    </div>
  );
}

export default App;
