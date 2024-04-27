"use client";
import React from 'react'

function MoveButton({move}) {
  
  const conti = ()=>{
    move = true
  }

  return (
    <button onClick={nextItem}>Click Me To Continue</button>
  )
}

export default MoveButton