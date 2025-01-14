import { Link, Navigate, Route, Routes } from "react-router"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import './App.css'
import College from "./components/College"
import Student from "./components/SubComponents/Student"
import Department from "./components/SubComponents/Department"
import CollegeDetails from "./components/SubComponents/CollegeDetails"


function App() {

  return (
    <>
    {/* <ul className="flex">
      <li className="flex bg-blue-300"><Link to="/">Home</Link></li>
      <li className="flex bg-red-400"><Link to="/about">About</Link></li>
    </ul> */}
    
    
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div className="p-4"><h1 className="text-2xl underline text-center">Contact Details</h1> <ul><li>Name : Deepak Gautam</li> <li>Email : ds095536@gmail.com</li> <li>Phone : 1234567890</li></ul></div>} />
      </Route>
      {/* Nested Routing */}
      <Route path="/college" element={<College />}>
        {/* <Route path="/college" element={<Student />} /> 
            OR */}
        <Route index element={<Student />} />
        <Route path="/college/department" element={<Department />} />
        <Route path="/college/collegedetails" element={<CollegeDetails />} />
      </Route>

      <Route path="/*" element={<Navigate to="/"/>} />
      {/* <Route path="*" element={<div className="flex items-center justify-center"><img src="https://comodosslstore.com/blog/wp-content/uploads/2024/01/website-page-found-error-robot-character-broken-chatbot-mascot-disabled-site-technical-work_502272-1888.jpg" alt="Page not found" className="mx-auto" /></div>} /> */}
    </Routes>
    </>
  )
}

export default App
