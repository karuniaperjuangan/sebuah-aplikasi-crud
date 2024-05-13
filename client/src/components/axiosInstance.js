import axios from "axios"
import { useNavigate } from "react-router-dom"
axios.defaults.withCredentials = true;

export const axiosInstance = axios.create({
  withCredentials: true
})

export const URI = 'http://localhost:2521'

export const notLogin = () => {
  const navigate = useNavigate
  navigate('/')
}
