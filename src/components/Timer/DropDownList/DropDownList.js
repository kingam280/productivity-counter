import React from 'react'
import classes from './DropDownList.module.css'
import ListItem from './ListItem'

const DropDownList = (props) => {
    const { isListOpen, options, setIsListOpen, setIsFormOpen, setCurrentOption } = props

    const handleClick = () => {
        setCurrentOption({label: "Add label...", color: null})
        setIsListOpen(false)
        setIsFormOpen(true)
    }

    return(
        <div className={classes.list}>
            <div className={classes.listItem} onClick={handleClick}><span className={classes.dot}>+</span>Add new label</div>
            {isListOpen && options.map(option => <ListItem data={option} {...props}/>)}
        </div>
    )
}

export default DropDownList