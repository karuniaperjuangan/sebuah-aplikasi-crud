import { 
  HashRouter as Router,  
  Route, 
  Routes
} from 'react-router-dom'
import Login from "./pages/Login"
import Activities from './pages/Activities'
import Calendar from './pages/Calendar'
import Nav from './components/nav'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Form from './pages/Form'
import NotFound from './pages/Notfound'
import Homepage from './pages/Homepage'
import FormEdit from './pages/EditAct'
import ProfileEdit from './pages/EditProfile'
// import * as dotenv from 'dotenv'
// dotenv.config()
console.log('http://localhost:2521')
export default function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/*' element={<NotFound/>} />
        <Route path='/form-edit' element={<FormEdit/>} />
        <Route path='/profile-edit' element={<ProfileEdit/>} />
      </Routes>
    </Router>
  )
}