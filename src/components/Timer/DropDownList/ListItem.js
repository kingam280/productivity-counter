import React from 'react'
import classes from './DropDownList.module.css'

const ListItem = (props) => {
    const { data, setIsListOpen, setCurrentOption } = props

    const handleClick = () => {
        setCurrentOption(data)
        setIsListOpen(false)
    }

    return(
        <div onClick={handleClick} className={classes.listItem}>
            <span className={classes.dot} style={{backgroundColor: data.color}}></span>
            <p>{data.label}</p>  
        </div>
    )
}

export default ListItem