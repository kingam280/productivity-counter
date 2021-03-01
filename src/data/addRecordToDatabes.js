import axios from '../axios'

export default function addRecordToDatabase(startTime, label) {
    const data = {
        label: label || 'no label',
        timeInMinutes: startTime,
        timestamp: Date.now()
    }

    axios
        .post('records.json', data)
        .then(console.log('Successfully added to database'))
        .catch(error => console.log(error))
}