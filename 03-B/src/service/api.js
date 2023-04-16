import axios from 'axios'

const baseURL = 'http://localhost:3333/dados'

const apiData = axios.create({
  baseURL: baseURL
})

export default apiData
