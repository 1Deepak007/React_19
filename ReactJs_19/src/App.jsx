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
import UseRef_FwdRef from './components/09UseRef_FwdRef'
import UnControlledComp from './components/10UnControlledComp'
import PassingFxnInComps from './components/11PassingFxnInComps'
import UsFrmStatus from './components/12UsFrmStatus_UsActnStat'
import UseTransition from './components/13UseTransition'
import LiftingStateUp from './components/14LftgStatUp_UpdObjStat'
import UseId_Hook from './components/15UseIdHk'
import ContextAPI from './components/16ContextAPI'
import CustomHook from './components/17CustomHook'
import APIs from './components/18APIs'




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
        <Route path='/useref_fwdref' element={<UseRef_FwdRef/>} />
        <Route path='/uncontrolledComp' element={<UnControlledComp/>} />
        <Route path='/passingFxnInComp' element={<PassingFxnInComps/>} />
        <Route path='/usFrmStatus' element={<UsFrmStatus/>} />
        <Route path='/useTransition' element={<UseTransition/>} />
        <Route path='/liftingstatup' element={<LiftingStateUp/>} />
        <Route path='/useidhook' element={<UseId_Hook/>} />
        <Route path='/contextapi' element={<ContextAPI/>} />
        <Route path='/customhook' element={<CustomHook/>} />
        <Route path='/apis' element={<APIs/>} />

        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App