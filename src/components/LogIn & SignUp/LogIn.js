import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase'
import {AuthContext} from '../../contexts/Auth'
import './LogIn.css';

const LogIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const { setUser } = useContext(AuthContext)

    const updateForm = (e) => {
        setError(false)
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
                window.location.replace("/timer")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setError(prev => !prev)
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div className="container">
            <h2>Log in</h2>
            
            <form onSubmit={handleSubmit} className="log-form">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" onChange={updateForm} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={updateForm} />
                <button>Log in</button>
                <p>{error ? "E-mail or password is incorrect" : ""}</p>
            </form>
            <p className="side-info">Sign up <Link to="/signup">here</Link></p>
        </div>
    )
}

export default LogIn