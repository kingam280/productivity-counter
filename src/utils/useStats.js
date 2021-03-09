import {useEffect, useState} from 'react'
import axios from '../config/axios'

const useStats = (id) => {
    const [records, setRecords] = useState([])
    
    const getRecordsFromDatabase = async () => {
        await axios
          .get(`/${id}.json`)
          .then(res => res.data)
          .then(data => {
            for (let record in data) {
              setRecords(prev => Array(data[record]).concat(prev))
            }
        })
    }

    useEffect(() => {
        getRecordsFromDatabase()
    }, [])

    return records
}

export default useStats