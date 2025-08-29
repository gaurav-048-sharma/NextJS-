import ClientComponent from "../clientcomp/page";

const servercomponent = async () => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(URL);
        const data = await response.json();

  return (


    <div>
        <div>
            <h1>Count</h1>
            <ClientComponent />
        </div>
                    <h1>Posts</h1>
            <ul className="flex flex-col justify-center">
                {data.map((curElem, index) => (
                    <li key={index}>{curElem.body}</li>
                ))}
            </ul>
    </div>
  )
}

export default servercomponent