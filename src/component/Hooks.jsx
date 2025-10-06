import { useState } from "react";

const Hooks = () =>{ 

       const [count,SetCount]=useState(0)
    const change=()=>{
      
       if(count<=9){
         SetCount(count+1)
       }else{
         SetCount(0)
       }
    }
    const [a,Seta]=useState(0)
    const [b,Setb]=useState(1)
     const [but,SetBut]=useState(0)

    const changes=()=>{
      SetBut(a)
      const next=a+b;
      Seta(b)
      Setb(next)


    }
    return (
        <>
       
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">React Hooks</h2>
            <p>Learn about React hooks here.</p>
        </div>
          

        <div className="bg-amber-400  ">
            <p> {count}</p>
            <button  onClick={change} className="bg-amber-100">change</button>

        </div>

        <div className="fleax justify-center  ">
            <p>{but}</p>
            <button  onClick={changes} className="">click me</button>
        </div>
         </>
    )
}

export default Hooks;