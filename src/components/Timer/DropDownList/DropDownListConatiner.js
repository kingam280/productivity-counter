import React, { useContext, useEffect, useState } from 'react'
import AddLabelForm from './AddLabelForm'
import DropDownList from './DropDownList'
import classes from './DropDownList.module.css'
import { fetchLabels } from '../../../store/actions/actions'
import { connect } from 'react-redux'
import { AuthContext } from '../../../contexts/Auth'

const DropDownListContainer = ({ labels, fetchLabels, currentLabel, isCounting, isEditable }) => {   
    const [isListOpen, setIsListOpen] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(false)
    const { user } = useContext(AuthContext)

    const props = {options: labels, isListOpen, setIsListOpen, setIsFormOpen, isEditable}
    
    useEffect(() => {
        fetchLabels(user)
    },[fetchLabels, user])

    useEffect(() => {
        if (!currentLabel && isCounting) setIsListOpen(true)
        else setIsListOpen(false)
    }, [currentLabel, isCounting])

    return(
        <>
        <div className={classes.input} >
            {currentLabel && <span className={classes.dot} style={{backgroundColor: currentLabel.color}}></span>}
            {currentLabel ?  currentLabel.label : <p style={{color: 'gray'}}>Choose...</p>}
            <button
                type="button"
                className={classes.button} 
                onClick={() => setIsListOpen(prev=>!prev)}
            >
                {isListOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
            </button>
            {isListOpen && <DropDownList {...props}/>}
            
        </div>
        {isFormOpen && <AddLabelForm setIsFormOpen={setIsFormOpen} />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      labels: state.counter.labels,
      currentLabel: state.counter.currentLabel,
      isCounting: state.counter.isCounting
    }
  }

const mapDispatchToProps = dispatch => ({ 
    fetchLabels: state => dispatch(fetchLabels(state))
  });

export default connect(mapStateToProps, mapDispatchToProps)(DropDownListContainer)