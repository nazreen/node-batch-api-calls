const axios = require('axios')

const makeRequest = (API_URL) => (document) => {
  return axios.post(API_URL, document)
}

module.exports = makeRequest
