import React from 'react'
import getAllWords from '@/lib/getAllWords';
import MoveButton from '../components/MoveButton';

function myRandomInts(quantity, max){
  const set = new Set()
  while(set.size < quantity) {
    set.add(Math.floor(Math.random() * max)+1)
  }
  
  return set
}



export default async function Practice() {  
  let object = await getAllWords();
  let data = object.items
  
  const random_set = myRandomInts(4,data.length-1)
  const random_number = Array.from(random_set)
  console.log(random_number)

  let selectedWords = []
  
    random_number.map(number=>{
      selectedWords.push(data[number])
    })
  
  console.log(selectedWords)

  return (
    <main>
      
      <div >
      
          <MoveButton data={data}/>
      </div>
      
    </main>
  );
}
