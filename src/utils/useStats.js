import {useEffect, useState, useCallback} from 'react'
import axios from '../config/axios'

const useStats = (userId) => {
    const [records, setRecords] = useState([])
    const [loading, setLoading] = useState(false)
    
    const getRecords = useCallback(async () => {
        
        if (userId) {
          setLoading(prev => !prev)
          await axios
            .get(`/${userId}.json`)
            .then(res => res.data)
            .then(data => {
              for (let record in data) {
                setRecords(prev => Array(data[record]).concat(prev))
              }
              setLoading(prev => !prev)
            })
        } else {
          const data = JSON.parse(localStorage.getItem('data')) || []
          setRecords(data)
        }
        
    }, [userId])

    useEffect(() => {
        getRecords()       
    }, [getRecords])

    return {records, loading}
}

export default useStats