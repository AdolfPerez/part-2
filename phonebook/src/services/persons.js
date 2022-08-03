import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'
const getAll = () => axios.get(baseUrl).then(({data}) => data)
const create = newObject => axios.post(baseUrl, newObject).then(({data}) => data)
export default { getAll, create }