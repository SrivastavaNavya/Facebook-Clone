import React from 'react'
import './Login.css'
import Button from '@mui/material/Button'
import { auth, provider } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) =>
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            ).catch((error) =>
                console.log(error.message)
            )
    };
    return (
        <div className='login'>
            <div className="login-logo">
                <img src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png" alt="" />
                <img src="https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
