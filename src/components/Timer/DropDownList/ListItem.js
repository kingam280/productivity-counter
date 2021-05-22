import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { deleteLabel, setCurrentLabel } from '../../../store/actions/actions'
import classes from './DropDownList.module.css'
import { AuthContext } from '../../../contexts/Auth'



const ListItem = (props) => {
    const { data, setIsListOpen, setCurrentLabel, isEditable, deleteLabel } = props
    const { user } = useContext(AuthContext)

    const handleClick = (e) => {
        if (e.target.dataset.key === 'remove') {
            deleteLabel({user, data})
        } else {
            setCurrentLabel(data)
            setIsListOpen(false)
        }
    }

    return(
        <div onClick={handleClick} className={classes.listItem}>
            <span className={classes.dot} style={{backgroundColor: data.color}}></span>
            <p>{data.label}</p>
            {isEditable && <i className={`${classes.button} fas fa-times`} data-key="remove"></i>}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({ 
    setCurrentLabel: state => dispatch(setCurrentLabel(state)),
    deleteLabel: state => dispatch(deleteLabel(state))
  });

export default connect(null, mapDispatchToProps)(ListItem)