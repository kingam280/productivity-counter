import React, { useState, createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = (props) => {
    const userId = localStorage.getItem('userId')
    const [user, setUser] = useState(userId)
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

