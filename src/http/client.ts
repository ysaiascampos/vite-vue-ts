import axios from 'axios'
import { onResponse, onResponseError } from './interceptors/response.interceptor'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Accept': 'application/json',
  },
  withCredentials: true,
})

// Interceptors
http.interceptors.response.use(onResponse, onResponseError)

export default http