import axios from '../config/axios'

export default function addRecordToDatabase(startTime, label, id) {
    const data = {
        label: label || 'no label',
        timeInMinutes: startTime,
        timestamp: Date.now()
    }

    axios
        .post(`/${id}.json`, data)
        .then(console.log('Successfully added to database'))
        .catch(error => console.log(error))
}