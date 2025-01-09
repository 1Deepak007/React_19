import { useState } from 'react'
import './App.css'
import Navbar from './utils/Navbar'
import { Route, Routes } from 'react-router-dom'
import React_states from './components/01react_states'
import Func_UseMemo from './components/02Func_UseMemo'
import React_Props from './components/03Props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<React_states />} />
        <Route path="/functions" element={<Func_UseMemo />} />
        <Route path='/props' element={<React_Props />} />
      </Routes>
    </>
  )
}

export default App