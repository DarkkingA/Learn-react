import { useState } from 'react';




export default function App() {

  return(<>
    <Mb></Mb>
    <Mb></Mb>

  </>)
    
}

function Mb(){
      
const [count,setCount]=useState(0)
function getB(){
    setCount(count +1 )
}
    return( <>
   
    <button onClick={getB} >Count: {count} 
    </button>    </>)
}