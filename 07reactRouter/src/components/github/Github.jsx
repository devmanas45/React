import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/devmanas45")
    //     .then(response => response.json())
    //     .then(data => setData(data))
    //     .then(data)
    // },[]);
    const data=useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Repositories:{data.public_repos}
        <img src={data.avatar_url} alt=""  className='rounded-full w-24'/>
        <h1>{data.name}</h1>
    </div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
  const response= await fetch("https://api.github.com/users/devmanas45");
  return response.json();
}