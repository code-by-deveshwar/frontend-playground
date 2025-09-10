import { useState } from "react";
export default function App() {
    const [count, setCount] = useState(0);
    const func = () => {
        setCount( (prev) => prev+1);
        setCount( (prev) => prev+1);
        setCount( (prev) => prev+1);
    }
    console.log(count)
  return <h1>
  
   <button
                    onClick={func}
                >
                    +
                </button></h1>
}
