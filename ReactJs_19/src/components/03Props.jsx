import React from 'react'
import User from './utils/user'
import College from './utils/College';
import Fruit from './utils/Fruit';
import Clock from './utils/Clock';


const React_Props = () => {
  const user1name = "Deepak Gautam";
  const user1gmail = "ds095536@mail.com"
  const user1details = {
    city:'Pune',
    state:'Maharasthra',
    country:'India'
  }

  const user2name = "Ishu Kirti Gautam";
  const user2gmail = "deeshu@mail.com"
  const user2details = {city:'Lucknow',state:'Uttrakhand',country:'Nepal'}

  const user3name = "Sudeep Savane";
  const user3gmail = "sudeep@gmail.com"
  const user3details = {city:'Pune',state:'Maharashtra',country:'India'}

  let collegename = ['IIT','NIT','MIT','DU']

  return (
    <>
        <h2 className='mb-4 text-center text-2xl underline'>React_Props</h2>
        
        {/* props */}
        <User name={user1name} email={user1gmail} userDetails={user1details}/>
        <User name={user2name} email={user2gmail} userDetails={user2details}/>
        <User name={user3name} email={user3gmail} userDetails={user3details}/>

        <College collegenames={collegename}/>

        {/* default props */}
        <Fruit fruit='Pineapple' />
        <Fruit />


        {/* clock */}
        <Clock />
    </>
  )
}

export default React_Props