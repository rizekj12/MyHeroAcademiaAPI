import axios from 'axios'

let apiUrl

const apiUrls = {
    production: "",
    development: "http://localhost:3000/api/v1/characters/"
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