import React from 'react'
import getAllWords from '@/lib/getAllWords';
import MoveButton from '../components/MoveButton';


export default async function Practice() {  
  let data = await getAllWords();
  let move = true;
  let i = 0;
  while (move){
    data = data[i]
    i++
    move = false
  }

  return (
    <main>
      
      <div >
       
        {/* {data.map(d=>{
          return (
          <>
          <div className='m-5 p-5'>
          <h1>{d.id}</h1>
          <h1>{d.first_language}</h1>
          <h1>{d.second_language}</h1>
          <h1>{d.difficulty}</h1>
          </div>
          </>
        )
        })} */}
          <h1>{data.id}</h1>
          <h1>{data.first_language}</h1>
          <h1>{data.second_language}</h1>
          <h1>{data.difficulty}</h1>
          <MoveButton boolean={move}/>
      </div>
      
    </main>
  );
}
