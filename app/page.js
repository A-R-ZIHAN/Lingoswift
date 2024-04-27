'use client';
import Image from "next/image";
import { useState } from "react";
import PocketBase from 'pocketbase'



export default function Home() {
  const [first_language, setFirst_Language] = useState("")
  const [second_language, setSecond_Language] = useState("")
  const [difficulty, setDifficulty] = useState("easy")


  const pb = new PocketBase('http://127.0.0.1:8090');

  const data = {
    "first_language": first_language,
    "second_language": second_language,
    "difficulty": difficulty,
    "improvement":0
  };

  const create = async ()=>{
    await pb.collection('words').create(data);
  }


  
  return (
    <main>
      <div className="m-6 p-10">
        <form onSubmit={create}>
          <h1>Hello</h1>
          <input className="text-black" placeholder="first lang" onChange={(e)=> setFirst_Language(e.target.value)}/>
          <input className="text-black" placeholder="second lang" onChange={(e)=> setSecond_Language(e.target.value)}/>
          <select className="text-black" onChange={(e)=> setDifficulty(e.target.value)} defaultValue={difficulty}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        
      </div>
      
    </main>
  );
}
