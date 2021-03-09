import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase'
import {AuthContext} from '../../contexts/Auth'
import './Log.css';
import { useHistory } from "react-router-dom";

const LogComponent = ({type}) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const { setUser } = useContext(AuthContext)
    const history = useHistory()

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
        if (type === "login") {
            firebase.auth().signInWithEmailAndPassword(form.email, form.password)
            .then((userCredential) => {
                var user = userCredential.user;
                setUser(user.uid)
                localStorage.setItem('userId', user.uid)
                history.push('/timer')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setError("E-mail or password is incorrect")
                console.log(errorCode, errorMessage)
            });
        } else {
            firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then((userCredential) => {
                var user = userCredential.user;
                history.push('/login')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setError(errorMessage)
                console.log(errorCode, errorMessage)
            });
        }
        
    }

    return (
        <div className="container">
            <h2>{type === "login" ? "Log in" : "Sign up"}</h2>
            <form onSubmit={handleSubmit} className="log-form">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" onChange={updateForm} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={updateForm} />
                <button>{type === "login" ? "Log in" : "Sign in"}</button>
                <p>{error}</p>
            </form>
            {type === "login" ? <p className="side-info"><Link to="/signup" className="clickable">Sign up</Link></p> : null}
        </div>
    )
}

export default LogComponent