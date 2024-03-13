import axios from "axios"
import { useNavigate } from "react-router-dom"

export const axiosInstance = axios.create({
  withCredentials: false
})

export const URI = process.env.REACT_APP_API_DOMAIN

export const notLogin = () => {
  const navigate = useNavigate
  navigate('/')
}
