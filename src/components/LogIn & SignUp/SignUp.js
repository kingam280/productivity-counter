import React, { useState } from 'react'
import firebase from '../../config/firebase'

const SignUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')

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
        firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then((userCredential) => {
                var user = userCredential.user;
                window.location.replace("/login")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setError(errorMessage)
            });
    }
    return (
        <div className="container">
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit} className="log-form">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" onChange={updateForm} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={updateForm} />
                <button>Sign in</button>
                <p>{error}</p>
            </form>
        </div>
    )
}

export default SignUp