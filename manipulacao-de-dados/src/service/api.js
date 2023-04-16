import axios from 'axios'

const baseURL = 'https://fakestoreapi.com/products?limit=15'

const apiData = axios.create({
  baseURL: baseURL
})

export default apiData

// import axios from 'axios'

// const baseUrl = 'https://fakestoreapi.com/products?limit=15'

// const apiData = axios.create({
//   baseURL: baseUrl
// })

// export default apiData
