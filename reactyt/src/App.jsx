import React, { useState }  from "react"

const App = ()=>{

    const[userName, setuserName] = useState("")

    const submitHandler =(e)=>{
      
        e.preventDefault();
        console.log(userName);

    }

    return (
        <div>
       
       <form onSubmit={(e)=>{
        submitHandler(e);
       }}>
        <input
        value={userName}
        onChange={(e)=>{
            setuserName(e.target.value)

        }}

        className = 'px-4 py-3 rounded text-xl m-5 text-black' 
        type="text" placeholder="Enter your name"/>
        <button className='px-4 py-3 text-xl m-5 font-semibold bg-emerald-600 rounded'>Submit</button>
       </form>

        </div>
    )
}

export default App


