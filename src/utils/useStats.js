import {useEffect, useState, useCallback} from 'react'
import axios from '../config/axios'

const useStats = (id) => {
    const [records, setRecords] = useState([])
    const [loading, setLoading] = useState(false)
    
    const getRecordsFromDatabase = useCallback(async () => {
        setLoading(prev => !prev)
        await axios
          .get(`/${id}.json`)
          .then(res => res.data)
          .then(data => {
            for (let record in data) {
              setRecords(prev => Array(data[record]).concat(prev))
            }
            setLoading(prev => !prev)
        })
    }, [id])

    useEffect(() => {
      if(id) {
        getRecordsFromDatabase()
      }
        
    }, [getRecordsFromDatabase, id])

    return {records, loading}
}

export default useStats