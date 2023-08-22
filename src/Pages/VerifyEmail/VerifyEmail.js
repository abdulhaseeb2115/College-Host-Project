import { signOut } from 'firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logOut } from '../../features/userSlice'
import { auth } from '../../firebaseConfig'
import "./VerifyEmail.css"

function VerifyEmail() {
    const navigate= useNavigate()
   const dispatch= useDispatch()

   function logOutUser() {
    signOut(auth)
      .then(() => {
        dispatch(logOut());
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
      });
  }
    return (
        <div className='error404'>
            <h1>Please Verify Your Email</h1>
            <h1><a href="/home">Home</a></h1>
            <h1 onClick={()=>  logOutUser()} >Sign out</h1>
        </div>
    )
}

export default VerifyEmail