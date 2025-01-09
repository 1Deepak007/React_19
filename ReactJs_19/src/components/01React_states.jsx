import React, { useState } from 'react'
import { Form } from 'react-router-dom';

const React_states = () => {
  const [counter, setCounter] = useState(0);
  const [showName, setShowName] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('handle form submit called')
    console.log(name, email, contact)
  }

  //========> Filter
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com' },
    { id: 4, name: 'Emily White', email: 'emily@example.com' },
  ];

  const [searchQuery, setSearchQuery] = useState('');   // state for search query
  const [filterUsers, setFilteredusers] = useState(users); // state for filtered list of user


  // handle input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // filter users based on search query
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredusers(filtered)
  }




  return (
    <div>
      <h1 className='text-center text-2xl underline'>React States</h1>

      <div className='text-center mt-10 bg-gray-100 pt-2 pb-2'>
        <h2 className='text-xl'>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter - 1)} className='text-2xl bg-red-500 ps-3 pe-3 pb-2 rounded-full mr-2'>-</button>
        <button onClick={() => setCounter(counter + 1)} className='text-2xl bg-green-500 ps-3 pe-3 pb-2 rounded-full'>+</button>
      </div>

      <div className='text-center mt-0 bg-gray-300 pt-2 pb-2'>
        <h2 className='text-xl'>{showName ? "Deepak Gautam" : null}</h2>
        <button onClick={() => setShowName(!showName)} className='text-md border-2 border-black p-1 rounded-full mt-2 bg-blue-300'>Toggle Button</button>
      </div>

      <div className='text-center mt-0 bg-gray-100 pt-2 pb-2'>
        <form onSubmit={handleFormSubmit}>
          <h2 className='text-3xl text-center underline'>Form</h2>
          <div className='col'>
            <div className="row ">
              <h2 className='text-xl'>Name : </h2>
              <input type='text' onChange={(e) => { setName(e.target.value) }} className='border-2s' />
            </div>
            <div className="row ">
              <h2 className='text-xl'>Email : </h2>
              <input type='email' onChange={(e) => { setEmail(e.target.value) }} className='border-2s' />
            </div>
            <div className="row ">
              <h2 className='text-xl'>Contact : </h2>
              <input type='number' onChange={(e) => { setContact(e.target.value) }} className='border-2s' />
            </div>
            <button type='submit' className='mt-2 bg-blue-500 p-2 text-white rounded-2xl'>Submit</button>
          </div>
        </form>
      </div>


      <div className='text-center mt-0 bg-gray-300 pt-2 pb-2'>
        <h2 className='text-3xl text-center underline mb-2'>Filter</h2>
        <input type="text" value={searchQuery} onChange={handleSearchChange} className='p-2 border rounded mb-4' placeholder='search email or name' />
        {/* Display filtered users */}
        <ul>
          {filterUsers.length === 0 ? (
            <p>No result found</p>
          ) : (
            filterUsers.map(user => (
              <li key={user.id}>
                <strong>{user.name}</strong> ({user.email})
              </li>
            ))
          )}
        </ul>
      </div>

    </div>
  )
}

export default React_states