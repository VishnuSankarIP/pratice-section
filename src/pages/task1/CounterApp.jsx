import React, { useState } from 'react'

function CounterApp() {
    const [counter, SetCounter] = useState(0);
    const [text, SetText] = useState("");

    const Increment = () => {
        SetCounter(counter + 1);
    }
    const Decrement = () => {
        if (counter > 0)
            SetCounter(counter - 1);
    }
    const DisplayFn = () => {
        SetText(prev=>prev=="Thanks"?"":"Thanks")

    }

    return (
        <>
            <div className="counter-app">
                <h1 className='text-center'>CounterApp</h1>
                <div className="btn-div p-5 flex items-center justify-center gap-4 ">
                    <button className='bg-blue-400 py-2 px-4 ' onClick={Increment}>Increment+</button>
                    <button className='bg-green-400 py-2 px-4' onClick={Decrement}>Decrement-</button>
                    <p>{counter}</p>
                    <button className='bg-green-400 py-2 px-4' onClick={DisplayFn}>Click here</button>
                    <h1>{text}</h1>


                </div>

            </div>
        </>
    )
}

export default CounterApp