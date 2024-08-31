import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Card from './components/card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-blue-800 p-8 rounded-xl mb-5' >Tailwind test</h1>
    <Card username="Manas" imgAdd="https://images.unsplash.com/photo-1724838818103-a3ff16624686?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    
    <Card username="Akshay" imgAdd="https://images.unsplash.com/photo-1724838818103-a3ff16624686?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  </>
  )
}

export default App
