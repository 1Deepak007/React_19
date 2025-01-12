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

  const [val, setval] = useState('Default value');


  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState('');
  const handleAddPersons = () => {
    setPersons([...persons, person]);
  }

  // using array (updating)
  const [stu_names, setstu_names] = useState(['Deepak', 'Sonu', 'Ishu']);
  const [new_stu, setnew_stu] = useState('');
  const handleUser = (name) => {
    stu_names[stu_names.length - 1] = name;
    setstu_names([...stu_names])
    console.log(stu_names)
  }

  //--------------------------------------------------
  const [userDetails, setUserDetails] = useState([
    { name: 'John', age: 20 },
    { name: 'Peter', age: 21 },
    { name: 'Sam Bahadur', age: 30 }
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [updateUser, setUpdateUser] = useState({ name: '', age: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser({ ...updateUser, [name]: value });
  }
  const handleUpdate = () => {
    if (editingIndex !== null) {
      const newUsers = [...userDetails];
      newUsers[editingIndex] = updateUser;
      setUserDetails(newUsers);
      setEditingIndex(null);
      setUpdateUser({ name: '', age: '' });
    }
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

      <div className='text-center mt-0 bg-gray-100 pt-2 pb-2'>
        <input type="text" value={val} onChange={(e) => setval(e.target.value)} />
        <h2>{val}</h2>
        <button onClick={() => setval('')} className='p-2 mt-2 bg-blue-300 rounded-full'>clear value</button>
      </div>

      <div className='text-center mt-0 bg-gray-300 pt-2 pb-2'>
        <div>
          <h2>Total persons : {persons.length}</h2>
          <h2>Last person : {persons[persons.length - 1]}</h2>
          <h2>Unique Total persons : {[...new Set(persons)].length}</h2>
        </div>
        <input type="text" onChange={(e) => setPerson(e.target.value)} placeholder='add new user' />
        <button onClick={handleAddPersons} className='p-2 mt-2 bg-blue-300 rounded-full ms-4'>Add Person</button>
        {
          persons.map((person, index) => <h2 key={index}>{person}</h2>)
        }
      </div>

      <div className=' mt-0 bg-gray-100 pt-2 pb-2'>
        <h2 className='text-3xl text-center underline mb-3'>Updating Array In State</h2>

        <div className='ps-4'>
          <h2 className='text-xl underline'>Update Last Index of array</h2>
          {
            stu_names.map((name, index) => (
              <span className='me-5' key={index}>{name}</span>
            ))
          }
          <br />
          <input type="text" onChange={(e) => setnew_stu(e.target.value)} placeholder='enter last user`s name' />
          <button onClick={() => handleUser(new_stu)} className='bg-green-300 text-sm p-1 rounded-md'>Update Last Name</button>
          <button onClick={() => setstu_names([...stu_names, new_stu])} className='bg-black text-sm text-white ms-3 p-1 rounded-md'>Add New Name</button>
        </div>

        <div className='ps-4 mt-3'>
          <h2 className='text-xl underline'>Users</h2>
          <ul className='mt-3'>
            {userDetails.map((user, index) => (
              <div className='flex' key={index}>
                <li key={index} className='mt-2'>
                  Name : {index + 1}{'.' + ' ' + user.name}. Age : {user.age}.
                  <button className='p-1 bg-green-300 ms-3' onClick={() => { setEditingIndex(index); setUpdateUser({ name: user.name, age: user.age }) }}>Update</button>
                </li>
              </div>
            ))}
          </ul>
          {
            editingIndex !== null && (
              <div>
                <h3 className='text-lg'>Edit User</h3>
                <input type="text" value={updateUser.name} // onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}    // we can do it like this also, or use function handlechange
                  onChange={handleChange} name='name' placeholder='update name' />
                <input type="number" value={updateUser.age} onChange={handleChange}
                  name='age' placeholder='update age' />
                <button className='p-1 bg-blue-300 ms-3' onClick={handleUpdate}>Update</button>
                <button className='p-1 bg-red-300 ms-3' onClick={() => setEditingIndex(null)}>Cancel</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default React_states