import {useEffect, useState} from 'react'
import axios from '../config/axios'

const useStats = () => {
    const [records, setRecords] = useState([])
    
    const getRecordsFromDatabase = async () => {
        await axios
          .get('/records.json')
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