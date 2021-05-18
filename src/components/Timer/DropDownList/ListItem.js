import React from 'react'
import { connect } from 'react-redux'
import { setCurrentLabel } from '../../../store/actions/actions'
import classes from './DropDownList.module.css'

const ListItem = (props) => {
    const { data, setIsListOpen, setCurrentLabel } = props

    const handleClick = () => {
        setCurrentLabel(data)
        setIsListOpen(false)
    }

    return(
        <div onClick={handleClick} className={classes.listItem}>
            <span className={classes.dot} style={{backgroundColor: data.color}}></span>
            <p>{data.label}</p> 
        </div>
    )
}

const mapDispatchToProps = dispatch => ({ 
    setCurrentLabel: state => dispatch(setCurrentLabel(state))
  });

export default connect(null, mapDispatchToProps)(ListItem)