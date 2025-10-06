import { useState } from "react";


const Components = () => {


 
        const [content,setContant]=useState(true)
            const next=()=>{
                setContant(!content)
            }
    
    return (
        <> 
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">React Components</h2>
            <p>Learn about React components here.</p>
        </div>
        <div  > {content?<div className=" flex bg-fuchsia-400  h-40 w-30 justify-center items-center   ">
        
        </div>:" not show" }</div>
        
       
        <button onClick={next} className="bg-red-600 rounded-3xl p-3 gap-2">change</button>
     
        </>
    );
}

export default Components;