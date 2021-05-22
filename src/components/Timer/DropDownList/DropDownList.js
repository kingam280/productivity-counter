import React from 'react'
import { connect } from 'react-redux'
import { setCurrentLabel } from '../../../store/actions/actions'
import classes from './DropDownList.module.css'
import ListItem from './ListItem'

const DropDownList = (props) => {
    const { isListOpen, setIsListOpen, setIsFormOpen, setCurrentLabel, isEditable, labels } = props

    const handleClick = () => {
        setCurrentLabel(null)
        setIsListOpen(false)
        setIsFormOpen(true)
    }

    return(
        <div className={classes.list}>
            {isEditable && <div className={classes.listItem} onClick={handleClick}><span className={classes.dot}>+</span>Add new label</div>}
            {isListOpen && labels.map((label, i) => <ListItem data={label} {...props} key={i} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      labels: state.counter.labels,
    }
  }

const mapDispatchToProps = dispatch => ({ 
    setCurrentLabel: state => dispatch(setCurrentLabel(state))
  });

export default connect(mapStateToProps, mapDispatchToProps)(DropDownList)