import React, { useContext, useEffect, useState } from 'react'
import AddLabelForm from './AddLabelForm'
import DropDownList from './DropDownList'
import classes from './DropDownList.module.css'
import { fetchLabels } from '../../../store/actions/actions'
import { connect } from 'react-redux'
import { AuthContext } from '../../../contexts/Auth'

const DropDownListContainer = ({ labels, fetchLabels }) => {
    const [isListOpen, setIsListOpen] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [currentOption, setCurrentOption] = useState({label: "Choose...", color: null})
    const { user } = useContext(AuthContext)

    const options = [{label: 'Red', color: '#f44336'},{label: 'Pink', color: '#e91e63'},{label: 'Indigo', color: '#3f51b5'},{label: 'Cyan', color: '#00bcd4'},]

    const props = {options: labels, isListOpen, setIsListOpen, setCurrentOption, setIsFormOpen}

    useEffect(() => {
        fetchLabels(user)
    },[fetchLabels, user])

    return(
        <div className={classes.input}>
            {currentOption.color && <span className={classes.dot} style={{backgroundColor: currentOption.color}}></span>}
            {currentOption.color ?  currentOption.label : <p style={{color: 'gray'}}>{currentOption.label}</p>}
            <button
                type="button"
                className={classes.button} 
                onClick={() => setIsListOpen(prev=>!prev)}
            >
                {isListOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
            </button>
            {isListOpen && <DropDownList {...props}/>}
            {isFormOpen && <AddLabelForm setIsFormOpen={setIsFormOpen} options={options}/>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      labels: state.counter.labels
    }
  }

const mapDispatchToProps = dispatch => ({ 
    fetchLabels: state => dispatch(fetchLabels(state))
  });

export default connect(mapStateToProps, mapDispatchToProps)(DropDownListContainer)