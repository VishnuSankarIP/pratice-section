import React from 'react'

function GreetingCard({name,message}) {
  return (
    <>
    <h1>Hello,{name}</h1>
    <p>{message}</p>
    </>
  )
}

export default GreetingCard