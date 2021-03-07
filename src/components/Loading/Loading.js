import React from 'react'
import './Loading.css';
import spinner from '../../assets/loading-spinner.gif'

const Loading = () => {
    return (
        <div className="loading">
            <img
                className="loading-spinner"
                alt="loading-spinner"
                src={spinner}
            />
        </div>
    )
}

export default Loading