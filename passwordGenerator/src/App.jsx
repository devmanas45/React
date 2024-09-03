import { useCallback, useState } from 'react';
function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(true);
  const [password,setPassword]=useState("")
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*(){}[]+=-";
    for(let i=1;i<=Array.length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass=str.charAt(char);
    }
    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-4xl my-4">Password generator</h1>
      <div className="flex-shadow rounded-lg overflow-hidden mb-4 flex" >
        <input type="text" value={password} 
        className='outline-none w-full py-1 px-3 rounded-lg' placeholder='password' readOnly />
        <button className='bg-blue-500 px-3 py-3 text-white rounded-xl ml-2'>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">

        <div className='flex items-center gag-x-1'>
          <input type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
          <label className="px-5 text-lg">Length: {length}</label>

        
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
            setNumberAllowed((prev)=>!prev);
  
          }} />
          <label htmlFor="numberInput">Number</label>
          <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{
            setCharAllowed((prev)=>!prev);
  
          }} />
          <label htmlFor="numberInput">Character</label>
        </div>
      </div>
    </div>
    
      
    </>
  )
}

export default App;
