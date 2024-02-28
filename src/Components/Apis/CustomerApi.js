import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/' })
// const API = axios.create({ baseURL: 'https://blog-backend-7kvy.onrender.com' });

export const createForm = formData => API.post('/', formData)
