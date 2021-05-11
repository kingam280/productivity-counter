import React, { useState } from 'react'
import AddLabelForm from './AddLabelForm'
import DropDownList from './DropDownList'
import classes from './DropDownList.module.css'

const DropDownListContainer = () => {
    const [isListOpen, setIsListOpen] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [currentOption, setCurrentOption] = useState({label: "Choose...", color: null})

    const options = [{label: 'Red', color: '#f44336'},{label: 'Pink', color: '#e91e63'},{label: 'Indigo', color: '#3f51b5'},{label: 'Cyan', color: '#00bcd4'},]

    const props = {options, isListOpen, setIsListOpen, setCurrentOption, setIsFormOpen}

    return(
        <div className={classes.input}>
            {currentOption.color && <span className={classes.dot} style={{backgroundColor: currentOption.color}}></span>}
            {currentOption.color ?  currentOption.label : <p style={{color: 'gray'}}>{currentOption.label}</p>}
            <button
                type="button"
                className={classes.button} 
                onClick={() => setIsListOpen(prev=>!prev)}
            >
                {isListOpen ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}
            </button>
            {isListOpen && <DropDownList {...props}/>}
            {isFormOpen && <AddLabelForm setIsFormOpen={setIsFormOpen} options={options}/>}
        </div>
    )
}

export default DropDownListContainer