import { useState } from 'react';
import './index.css';
function App() {
  const [color,setColor]=useState("lavender");
  return (
    <>
    <div className="w-full h-screen duration-100 flex justify-center items-center" style={{backgroundColor:color}}>
      <h1 className='grid place-items-center text-4xl'>Background Changer</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"red"}} onClick={()=>setColor('red')}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"green"}} onClick={()=>setColor('green')}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"blue"}} onClick={()=>setColor('blue')}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"pink"}} onClick={()=>setColor('pink')}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"brown"}} onClick={()=>setColor('brown')}>Brown</button>
          <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"orange"}} onClick={()=>setColor('orange')}>Orange</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App