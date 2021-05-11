import React, { useState } from 'react'
import classes from './DropDownList.module.css'
import ListItem from './ListItem'

const DropDownList = (props) => {
    const { isOpen, options } = props

    return(
        <div className={classes.list}>
            {isOpen && options.map(option => <ListItem data={option} {...props}/>)}
        </div>
    )
}

export default DropDownList