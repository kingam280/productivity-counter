import React, { useState, useContext } from 'react'
import firebase from '../config/firebase'
import {AuthContext} from '../contexts/Auth'

const LogIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const { setUser } = useContext(AuthContext)

    const updateForm = (e) => {
        setForm(prev => {
            return {
                ...prev,
                [e.target.id]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(form.email, form.password)
            .then((userCredential) => {
                var user = userCredential.user;
                setUser(user.uid)
                localStorage.setItem('userId', user.uid)
                
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" onChange={updateForm} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={updateForm} />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default LogIn