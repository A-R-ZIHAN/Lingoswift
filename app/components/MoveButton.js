"use client";
import React from 'react'

function MoveButton({data}) {
  let move = true;
  let i = 0;
  while (move){
    console.log(data[i])
    i++
    move = false
  }
  const conti = ()=>{
    move = true
  }

  return (
    <button onClick={conti}>Click Me To Continue</button>
  )
}

export default MoveButton