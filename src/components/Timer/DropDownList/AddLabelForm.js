import { useContext, useState } from 'react'
import { connect } from 'react-redux'
import { AuthContext } from '../../../contexts/Auth'
import { saveLabel } from '../../../store/actions/actions'
import styles from '../AddRecordForm/AddRecordForm.module.css'

const colors = [
    {label: 'Red', color: '#f44336'},
    {label: 'Pink', color: '#e91e63'},
    {label: 'Indigo', color: '#3f51b5'},
    {label: 'Cyan', color: '#00bcd4'},
    {label: 'Green', color: '#4caf50'},
    {label: 'Yellow', color: '#ffeb3b'},
    {label: 'Orange', color: '#ff9800'},
    {label: 'Deep orange', color: '#ff5722'},
    {label: 'Grey', color: '#9e9e9e'},
    {label: 'Blue grey', color: '#607d8b'},
]

const AddLabelForm = ({ setIsFormOpen, options, saveLabel }) => {
    const [form, setForm] = useState(colors[0])
    const { user } = useContext(AuthContext)
    
    const handleChange = (e) => {
        setForm(prev=> ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const handleClose = (e) => {
        if (e.target.dataset.name === "enable-close") {
            setIsFormOpen(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {...form, userId: user}
        saveLabel(data)
        setIsFormOpen(false)
    }

    return (
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
                    <label htmlFor="label" className={styles.labels}>Color</label>
                    <select 
                        id="color"
                        className={styles.inputs}
                        style={{backgroundColor: form.color}}
                        value={form.colors}
                        required
                    >
                        {colors.map(color => <option style={{backgroundColor: color.color, fontSize: '1.5rem'}} value={color.color} ></option>)}
                    </select>
                    <button className={styles.submit}>Add label</button>
                    <i 
                        className={`fas fa-times-circle ${styles.closeBtn}`} 
                        data-name="enable-close" 
                    ></i>
                </form> 
            </div>
    )
}

const mapDispatchToProps = dispatch => ({ 
    saveLabel: state => dispatch(saveLabel(state))
  });
  

export default connect(null, mapDispatchToProps)(AddLabelForm)