import React, { useEffect } from 'react'
import { use } from 'react'

const Counter = ({count}) => {

    const handleCOunter = () => {
        console.log('clicked')
    }

    useEffect(() => {
        handleCOunter()
    }, [])

  return (
    <div>Counter {count}</div>
  )
}

export default Counter