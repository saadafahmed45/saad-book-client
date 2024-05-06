"use client"
import React from 'react'

const Click = () => {
     const clickme = () => {
  console.log('click');
}
  return (
     <button onClick={clickme}> click</button>
  )
}

export default Click