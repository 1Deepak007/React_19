import './App.css'
import Navbar from './utils/Navbar'
import { Route, Routes } from 'react-router-dom'
import React_states from './components/01react_states'
import Func_UseMemo from './components/02Func_UseMemo'
import React_Props from './components/03Props'
import Wrapper from './components/04Wrapper'
import Controlled_comp from './components/05Controlled_comp'
import AllKindsInputs from './components/06AllKindsInputs'
import Loop_compReuse_prop from './components/07Loop_compReuse_prop'
import UseEffectHook from './components/08UseEffect'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<React_states />} />
        <Route path="/functions" element={<Func_UseMemo />} />
        <Route path='/props' element={<React_Props />} />
        <Route path='/wrapper' element={<Wrapper />} />
        <Route path='/controlled_comp' element={<Controlled_comp />} />
        <Route path='/allkindsinput' element={<AllKindsInputs/>} />
        <Route path='/loop_compReuse_prop' element={<Loop_compReuse_prop/>} />
        <Route path='/useEffectHook' element={<UseEffectHook/>} />

        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App