import axios from "axios"
import { useNavigate } from "react-router-dom"

export const axiosInstance = axios.create({
  withCredentials: false
})

export const URI = 'http://localhost:2521'

export const notLogin = () => {
  const navigate = useNavigate
  navigate('/')
}

export const toastifyConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

export const dict = {
  '2-todo': "bg-red-500",
  '1-ongoing': "bg-yellow-500",
  '3-done': "bg-green-500"
}

export default function cn(...classes) {
	return classes.filter(Boolean).join(" ");
}