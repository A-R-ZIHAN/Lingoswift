import PocketBase from 'pocketbase'



export default async function(){

  const pb = new PocketBase('http://127.0.0.1:8090');


  const words = await pb.collection('words').getList()


  return words
  
}

