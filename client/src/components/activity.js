import { Fragment, useState, useEffect} from 'react'
import { axiosInstance, URI, notLogin, dict} from "./component-config";
import Modal from "../components/modal"
import moment from 'moment'

export default function Activity({searchData, category}) {
  const [activity, setActivity] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [actToShow, setActToShow] = useState({act:{
    _id: "",
    actStatus: ""
  }})
  const URL = URI + "/activity"

  const activities = [
    {
      actName: "Write a blog post",
      actCategory: "Content Creation",
      actDate: new Date('2024-05-13'), // Set a specific date for example
      actDescription: "Research and write a blog post on a relevant topic.",
      actStatus: "2-todo"
    },
    {
      actName: "Go for a run",
      actCategory: "Health & Fitness",
      actDescription: "Run for 30 minutes outdoors.",
      actDate: new Date('2024-05-13'),
      actStatus: "1-ongoing"
    },
    {
      actName: "Grocery shopping",
      actCategory: "Errands",
      actDescription: "Buy groceries for the next week.",
      actDate: new Date('2024-05-13'),
      actStatus: "3-done"
    },
    {
      actName: "Learn a new coding skill",
      actCategory: "Professional Development",
      actDescription: "Spend 30 minutes practicing a new programming concept.",
      actDate: new Date('2024-05-13'),
      actStatus: "2-todo"
    },
    {
      actName: "『Algorhythm』2024.5.15 COMEBACK OT4!",
      actCategory: "Relaxation",
      actDescription: "",
      actDate: new Date('2024-05-15'),
      actStatus: "1-ongoing"
    }
  ];

  /*
  useEffect(() => {

    (async () => {
      try {
        console.log(URL + 
          '?search=' + searchData + 
          '&category=' + category)  
        const res = await axiosInstance.get(URL + 
          '?search=' + searchData + 
          '&category=' + category)
        setActivity(res.data.data.activity)
      } catch(err) {
        notLogin()
      }
      })()
  }, [searchData, showModal, category])
  */
  const handleClick = (act) => {
    setActToShow(act)
    setShowModal(true)
  }

  return (
    <ul>
    {
      activities.map((act)=>(
        <li key={act._id}>
          <Fragment>

            <button 
              className="w-full hover:bg-blue-400 group hover:ring-blue-400 hover:shadow-md md:p-0 bg-white ring-1 ring-slate-200 shadow-sm"
              id={act.actName.toString()} 
              onClick={() => handleClick({act})}>
              <article className="w-auto flex space-x-6 my-7 mx-8">
                <div className={"w-[0.5%] py-10 px-1 rounded-full " + dict[act.actStatus]}></div>
                <div className="w-[99.5%]">
                  <div className='flex items-center'>
                    <h1 class="mr-3 group-hover:text-white font-semibold text-lg text-slate-900">
                      {act.actName}
                    </h1>
                    <label class="group-hover:text-blue-200 text-sm text-slate-500">
                      {act.actCategory}
                    </label>
                  </div>    
                  <div class="group-hover:text-blue-50 my-1 flex text-sm font-medium text-slate-700">
                    {moment(act.actDate).format("dddd, Do MMMM YYYY")}
                  </div>
                  <div class="w-auto text-left group-hover:text-blue-50 my-1 text-sm text-slate-700">
                    <p className="truncate">
                      {act.actDescription}
                    </p>
                  </div>
                </div>
              </article>  
            </button>
            
            <Modal 
              isVisible={showModal} 
              onClose={() => setShowModal(false)}
              actToShow={actToShow}>
            </Modal>
          </Fragment>
        </li>
      ))
    }
    </ul>  
  )
}