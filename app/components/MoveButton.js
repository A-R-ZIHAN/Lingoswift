"use client";
import React, { useEffect } from 'react'
import { useState } from 'react';
import PocketBase from 'pocketbase'
import getAllWords from '@/lib/getAllWords';


function MoveButton({data}) {
  const [i,setI] = useState(0)
  useEffect(()=>{
    if(data[i] == undefined){
      setI(0)
    }  

  },[i])

  const pb = new PocketBase('http://127.0.0.1:8090');

  let updatedData = {}
  if(data[i] != undefined){
    updatedData = {
      improvement: data[i].improvement + 2
    };
  }
  

  const update = async ()=>{
    await pb.collection('words').update(data[i].id, updatedData);
  }

  
  const know = ()=>{
    if(data[i] == undefined){
      setI(0)
    } 
    setI(i+1)
    update()
  }
  const dontKnow = ()=>{
    setI(i+1)
  }


  return (
    <>
     
    
      <h1>{data[i].id}</h1>
      <h1>{data[i].first_language}</h1>
      <h1>{data[i].second_language}</h1>
      <h1>{data[i].difficulty}</h1>
      <button onClick={know}>I know this word</button>
      <button onClick={dontKnow}>I know this word</button>
     
      
     
     
      
    </>
    
  )
}

export default MoveButton