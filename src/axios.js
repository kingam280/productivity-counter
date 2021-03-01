import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://productivity-counter-f8fed-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance