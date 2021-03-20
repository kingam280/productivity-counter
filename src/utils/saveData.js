import axios from '../config/axios'

const saveData = (userId, startTime, label) => {
    const data = {
        label: label || 'no label',
        timeInMinutes: startTime,
        timestamp: Date.now()
    }

    if (userId) {
        console.log(userId + 'is logged')
        axios
            .post(`/${userId}.json`, data)
            .then(res => console.log('Successfully added to database'))
            .catch(error => console.log(error))
    } else {
        console.log('unknown user')
        const array = JSON.parse(localStorage.getItem(data)) || []
        array.push(data)
        localStorage.setItem('data', JSON.stringify(array))
    }
}


export default saveData