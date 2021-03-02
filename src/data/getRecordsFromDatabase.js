import axios from '../axios'

export default async function getRecordsFromDatabase() {
   await axios
        .get('/records.json')
        .then(res => res.data)
        .then(data => { 
            return data
        })
}