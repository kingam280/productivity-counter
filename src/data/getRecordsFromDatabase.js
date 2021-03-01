import axios from '../axios'

export default function getRecordsFromDatabase() {
    axios
        .get('records.json')
        .then(res => res.data)
        .then(data => console.log(data))
}