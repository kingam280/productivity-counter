import axios from '../config/axios'

const saveData = (userId, startTime, label) => {
    const data = {
        label: label || 'no label',
        timeInMinutes: startTime,
        timestamp: Date.now()
    }

    if (userId) {
        axios
            .post(`/${userId}.json`, data)
            .then(res => console.log('Successfully added to database'))
            .catch(error => console.log(error))
    } else {
        const array = JSON.parse(localStorage.getItem('data')) || []
        array.unshift(data)
        localStorage.setItem('data', JSON.stringify(array))
    }
}


export default saveData