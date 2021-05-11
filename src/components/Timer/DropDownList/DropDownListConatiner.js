import React, { useState } from 'react'
import DropDownList from './DropDownList'
import classes from './DropDownList.module.css'

const DropDownListContainer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentOption, setCurrentOption] = useState({label: "Add label...", color: null})

    const options = [{label: 'number1', color: 'pink'}, {label: 'number2', color: 'blue'}, {label: 'number 5', color: 'red'}, {label: 'number 4', color: 'green'}]

    const props = {options, isOpen, setIsOpen, setCurrentOption}

    return(
        <div className={classes.input}>
            {currentOption.color && <span className={classes.dot} style={{backgroundColor: currentOption.color}}></span>}
            {currentOption.color ?  currentOption.label : <p style={{color: 'gray'}}>{currentOption.label}</p>}
            <button 
                className={classes.button} 
                onClick={() => setIsOpen(prev=>!prev)}
            >
                {isOpen ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}
            </button>
            {isOpen && <DropDownList {...props}/>}
        </div>
    )
}

export default DropDownListContainer