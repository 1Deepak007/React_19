import React, { useState } from 'react'

const AllKindsInputs = () => {
    const [inputText, setInputText] = useState('')
    const [inputNumber, setInputNumber] = useState(null)
    const [isChecked, setIsChecked] = useState(false)
    const [selectedOption,setSelectedOption] = useState()
    const [dropdownValue,setDropdownValue] = useState()
    const [selectFile, setSelectFile] = useState(null)
    const [hobbies,setHobbies] = useState([])

    const handleOptionChange=(e)=>{
        setSelectedOption(e.target.value)
    }

    const handleSelectHobby=(e)=>{
        // console.log(e.target.value,':',e.target.checked)
        setHobbies((prev)=>{
            if(e.target.checked == true){
                return [...prev,e.target.value]
            }
            else{
                return prev.filter(hobby => hobby !== e.target.value)
            }
        })
    }
    console.log(hobbies);

    return (
        <div className='p-4'>
            <h2 className='text-center text-2xl underline'>Inputs</h2>

            <div className='row'>
                {/* text */}
                <div className="col">
                    <input type='text' onChange={(e) => setInputText(e.target.value)} placeholder='enter a text' className='border-2 border-black m-2'/>
                    <button onClick={()=>{alert(`Entered text : ${inputText}`)}} className='p-1 bg-blue-300 rounded-full'>submit</button>
                </div>
                {/* number */}
                <div className="col">
                    <input type='text' onChange={(e) => setInputNumber(e.target.value)} placeholder='contact number' className='border-2 border-black m-2'/>
                    <button onClick={()=>{alert(`Entered contact no. is : ${inputNumber}`)}} className='p-1 bg-blue-300 rounded-full'>submit</button>
                </div>
                {/* checkbox */}
                <div className="col">
                    Above 18
                    <input type='checkbox' onChange={() => setIsChecked(!isChecked)} className='m-3'/>
                </div>
                {/* radio */}
                <div className="bg-blue-300 p-3">
                    <h2 className='flex'>Select your favourate place : 
                        { selectedOption ? <h2 className='ms-2'>{selectedOption}</h2> : null}
                    </h2>
                    <div className="row">
                        <label className='me-4 '><input type='radio' value='Switzerland' checked={selectedOption==='Switzerland'} onChange={handleOptionChange}/>Switzerland</label>
                        <label className='me-4'><input type='radio' value='Vatican city' checked={selectedOption==='Vatican city'} onChange={handleOptionChange}/>Vatican city</label>
                        <label className='me-4'><input type='radio' value='Las vagas' checked={selectedOption==='Las vagas'} onChange={handleOptionChange}/>Las vagas</label>
                    </div>
                </div>
                {/* multi selector  */}
                <div className="bg-gray-300 p-3">
                    <h2 className='flex'> Select your hobbies : 

                    </h2>
                    <div className='row'>
                        <label><input type='checkbox' onClick={handleSelectHobby} value='tennis'/>Tennis</label>
                        <label><input type='checkbox' onClick={handleSelectHobby} value='table-tennis'/>Table Tennis</label>
                        <label><input type='checkbox' onClick={handleSelectHobby} value='cricket'/>Cricket</label>
                        <label><input type='checkbox' onClick={handleSelectHobby} value='batminton'/>Batminton</label>
                    </div>
                </div>
                {/* dropdown */}
                <div className='flex mt-3'>
                    <label htmlFor="">Select your gender.</label>
                    <select onChange={(e)=>setDropdownValue(e.target.value)} className='bg-green-200 rounded-3xl ms-4'>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                    {
                        dropdownValue ? <p className='ms-8'>You are : {dropdownValue}</p> : <p>no value selected</p>
                    }
                </div>

                {/* File Input */}
                <div className="flex mt-3">
                    <label htmlFor="">Select a file</label>
                    <input type="file" onChange={(e)=>setSelectFile(e.target.files[0])} />
                </div>
            </div>
        </div>
    )
}

export default AllKindsInputs