import React, { useState } from 'react'

function Counter() {
    const [count,SetCount]=useState(0);

   const Increment=()=>{
        SetCount(count+1);
    }
    const Decremeent=()=>{
        
        if(count>0)
        {
            SetCount(count-1);
        }
    }
    const Reset=()=>{
        SetCount(0);
    }


  return (
    <>
        <div>Counter:{count}</div>
        <button onClick={Increment}>Increment+</button>
        <button onClick={Decremeent}>Decrement-</button>
        <button onClick={Reset}>Reset</button>

    </>

  )
}

export default Counter