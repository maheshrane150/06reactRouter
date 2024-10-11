import React from "react"
// import { useLoaderData } from "react-router-dom"
import {useState, useEffect} from "react"

function Github(){
    // const data = useLoaderData();
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://api.github.com/users/maheshrane150`).then((res)=>res.json()).then((res)=> setData(res));
    },[])
    return(
        <>
        <div className='flex justify-center  bg-gray-600 mt-4 p-4'>
          <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
        <div className="text-center bg-gray-600 text-white p-8 text-3xl pb-12">Github followers: {data.followers}</div>
        </>
    )
}

export default Github;

// export const githubInfoLoder = async () => {
//     const responce = await fetch(`https://api.github.com/users/maheshrane150`)
//     return responce.json()
// }
