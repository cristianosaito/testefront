import axios from 'axios'

const productService = axios.create({
  baseURL: 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'
})

export default productService
