import React from 'react'
import { connect } from 'react-redux'
import { setCurrentLabel } from '../../../store/actions/actions'
import classes from './DropDownList.module.css'
import ListItem from './ListItem'

const DropDownList = (props) => {
    const { isListOpen, options, setIsListOpen, setIsFormOpen, setCurrentLabel } = props

    const handleClick = () => {
        setCurrentLabel(null)
        setIsListOpen(false)
        setIsFormOpen(true)
    }

    return(
        <div className={classes.list}>
            <div className={classes.listItem} onClick={handleClick}><span className={classes.dot}>+</span>Add new label</div>
            {isListOpen && options.map((option, i) => <ListItem data={option} {...props} key={i} />)}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({ 
    setCurrentLabel: state => dispatch(setCurrentLabel(state))
  });

export default connect(null, mapDispatchToProps)(DropDownList)