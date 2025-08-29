'use client'

import { useEffect, useState } from "react";
//const URL = "https://jsonplaceholder.typicode.com/posts";

const ClientComponent = () => {

const [count , setCount] = useState(0);
    // const [postData , setPostdata] = useState([]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(URL);
    //         const data = await response.json();
    //         console.log(data);
    //         setPostdata(data);
    //     }
    //     fetchData();
    // },[])

    return (
        <div>
            <h1>Count: {count}</h1>
            <div>
                 <button className='bg-amber-400' onClick={() => alert('Button clicked!')}>Click Me</button>
                 <button className="" onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            {/* <h1>Posts</h1>
            <ul className="flex flex-col justify-center">
                {postData.map(post => (
                    <li key={post.id}>{post.body}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default ClientComponent
  