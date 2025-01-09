import React from 'react'

// const User = ({name,email}) => {      
const User = (props) => {
  return (
    <div>
        <h1>Hello {props.name}</h1>
        Your registered email is : {props.email}
    </div>
  )
}

export default User