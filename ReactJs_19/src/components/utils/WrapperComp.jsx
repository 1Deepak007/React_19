import React from 'react'

const WrapperComp = ({children,color='lightblue'}) => {
  return (
    <div style={{background:color}}>
        <h1>This is WrapperComp. Below is data that is wrapped inside me.</h1>
        <div>
            {children}
        </div>
    </div>
  )
}

export default WrapperComp