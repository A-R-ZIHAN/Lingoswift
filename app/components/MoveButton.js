"use client";
import React from 'react'
import { useState } from 'react';

function MoveButton({data}) {
  const [i,setI] = useState(0)
  
  const conti = ()=>{
    if(i==0){
      setI(1)
    }else{
      setI(0)
    }
  }

  return (
    <>
      
      <h1>{data[i].id}</h1>
      <h1>{data[i].first_language}</h1>
      <h1>{data[i].second_language}</h1>
      <h1>{data[i].difficulty}</h1>
      <button onClick={conti}>Click Me To Continue</button>
    </>
    
  )
}

export default MoveButton