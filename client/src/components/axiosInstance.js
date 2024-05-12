import axios from "axios"
import { useNavigate } from "react-router-dom"
axios.defaults.withCredentials = true;

export const axiosInstance = axios.create({
  withCredentials: true
})

export const URI = process.env.REACT_APP_API_DOMAIN

export const notLogin = () => {
  const navigate = useNavigate
  navigate('/')
}
