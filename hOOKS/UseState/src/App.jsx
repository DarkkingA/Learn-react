import { useState } from 'react';




export default function App() {

    
const [count,setCount]=useState(0)
function getB(){
    setCount(count +1 )
}
    return( <>
    <h1> Premier pas avec useState </h1>
    <button onClick={getB} >Count1 {count} 
    </button>    
    </>)
}
