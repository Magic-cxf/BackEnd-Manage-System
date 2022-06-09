let BASE_NAME = ''
let BASE_URL = ''
const BASE_TIMEOUT = 5000

if (process.env.NODE_ENV === 'development') {
  BASE_NAME = 'development'
  BASE_URL = 'https://httpbin.org'
} else if (process.env.NODE_ENV === 'production') {
  BASE_NAME = 'production'
  BASE_URL = 'https://119.3.138.150:8001'
} else {
  BASE_NAME = 'test'
  BASE_URL = 'localhost:3000'
}

export { BASE_NAME, BASE_TIMEOUT, BASE_URL }
