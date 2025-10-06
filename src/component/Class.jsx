import { useState } from "react";

const Class=()=>{


    const [not,setNot]=useState(true)
    const hide=()=>{
        setNot(!not)
    }
    return(<>
    <div>
        <div>
            <h1> {not?"this is react":" "} </h1>
        </div>
        <button onClick={hide} className=" bg-fuchsia-200 rounded-2xl">change</button>
    </div>




</>)
}
export default Class;