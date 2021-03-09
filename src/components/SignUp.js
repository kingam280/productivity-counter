import React, { useState } from 'react'
import firebase from '../config/firebase'

const SignUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

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
        firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
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
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default SignUp