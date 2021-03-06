import axios from 'axios'

let apiUrl

const apiUrls = {
    production: "https://mha-api.herokuapp.com/api/characters",
    development: "http://localhost:3000/api/characters/"
}

if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development
  } else {
    apiUrl = apiUrls.production
  }
  const api = axios.create({
    baseURL: apiUrl,
  })
  
  export default api