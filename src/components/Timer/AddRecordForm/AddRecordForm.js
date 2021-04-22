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
        if (e.target.id === "timestamp") {
            const timestamp = new Date(e.target.value).getTime()
            setForm(prev => ({...prev, timestamp}))
        } else {
            const key = e.target.id
            setForm(prev => ({...prev, [key]: e.target.value}))
        }
    }

    const handleClose = (e) => {
        if (e.target.dataset.name === "enable-close" || e.target.dataset.name === "enable-close") {
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
            <div className={styles.formContainer} onClick={handleClose} data-name="enable-close">
                <form 
                    action="submit" 
                    onChange={handleChange} 
                    onSubmit={handleSubmit} 
                    className={styles.addRecordForm}
                >
                    <label htmlFor="label" className={styles.labels}>Label</label>
                    <input 
                        type="text" 
                        className={styles.inputs} 
                        id="label" 
                        required
                    />
                    <label htmlFor="label" className={styles.labels}>Time in minutes</label>
                    <input 
                        type="number" 
                        min="5"  
                        step="5" 
                        className={styles.inputs} 
                        id="focusTime" 
                        required
                    />
                    <label htmlFor="label" className={styles.labels} >Date</label>
                    <input 
                        type="date" 
                        className={styles.inputs} 
                        id="timestamp" 
                        required
                    />
                    <button className={styles.submit}>Add record</button>
                    <i 
                        className={`fas fa-times-circle ${styles.closeBtn}`} 
                        data-name="enable-close" 
                    ></i>
                </form> 
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({ 
    saveRecord: state => dispatch(saveRecord(state))
  });

export default connect(null, mapDispatchToProps)(AddRecordForm)