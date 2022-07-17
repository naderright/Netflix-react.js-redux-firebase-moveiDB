import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/counter/userSlice';
import { auth } from '../../firebase';
import Navbar from '../Navbar/Navbar'
import style from './profile.module.css'
function Profile() {
    const user = useSelector(selectUser);
    console.log(user);
    return (
        <div className={style.profile}>
            <Navbar />
            <div className={style.profileContent}>
                

                <div className={style.profile_info}>
                    <h1 className={style.edit}>Edite Profile</h1>
                    <div className={style.proContent}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1057/1057231.png?w=360" alt="" />
                        <div className={style.profile_details}>
                            <h2>{user ? user.email : ''}</h2>
                            <div className={style.profile_plan}>
                                <h3>plan</h3>

                                <button onClick={() => auth.signOut()} className={style.btn_signOut}>sign out</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile