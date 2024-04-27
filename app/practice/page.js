import React from 'react'
import getAllWords from '@/lib/getAllWords';
import MoveButton from '../components/MoveButton';


export default async function Practice() {  
  let data = await getAllWords();


  return (
    <main>
      
      <div >
      
          <MoveButton data={data}/>
      </div>
      
    </main>
  );
}
