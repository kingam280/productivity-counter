import React, { useState, useContext } from 'react'
import { connect } from "react-redux";
import { saveRecord } from "../../../store/actions/actions"
import { AuthContext } from '../../../contexts/Auth'
import styles from './AddRecordForm.module.css'

const AddRecordForm = ({ saveRecord, setIsAddRecordFormOpen }) => {
    const { user } = useContext(AuthContext)
    
    const [form, setForm] = useState({
        timestamp: null,
        label: null,
        focusTime: null
    })

    const handleChange = (e) => {
        if (e.target.dataset.name === "timestamp") {
            const timestamp = new Date(e.target.value).getTime()
            setForm(prev => ({...prev, timestamp}))
        } else {
            const key = e.target.dataset.name
            setForm(prev => ({...prev, [key]: e.target.value}))
        }
    }

    const handleClose = (e) => {
        if (e.target.dataset.name === "add-record-form-bg") {
            setIsAddRecordFormOpen(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dataToSave = {...form, userId: user}
        saveRecord(dataToSave)
        setIsAddRecordFormOpen(false)
    }
    return(
        <>
            <div className={styles.formContainer} onClick={handleClose} data-name="add-record-form-bg">
                <form action="submit" onChange={handleChange} onSubmit={handleSubmit} className={styles.addRecordForm} >
                    <input type="text" className="text" data-name="label" required/>
                    <input type="number" min="5"  step="5" className="text" data-name="focusTime" required/>
                    <input type="date" className="date" data-name="timestamp" required/>
                    <button>Add record</button>
                </form>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({ 
    saveRecord: state => dispatch(saveRecord(state))
  });

export default connect(null, mapDispatchToProps)(AddRecordForm)