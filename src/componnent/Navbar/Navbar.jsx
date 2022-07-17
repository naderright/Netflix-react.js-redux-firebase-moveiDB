import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
     const navigate = useNavigate();

    const [show,handleShow] = useState(false);

    const transitionNavbar = ()=>{
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavbar);
    },[])


    return (
        <div className={`Nav ${show ? 'nav_black':''}`}>
            <div className="nav_content">
                <img onClick={()=>navigate('/home')} className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" />
                <img onClick={()=>navigate('/profile')} className='nav_profile' src="https://cdn-icons-png.flaticon.com/512/1057/1057231.png?w=360" alt="" />

            </div>
        </div>
    )
}

export default Navbar