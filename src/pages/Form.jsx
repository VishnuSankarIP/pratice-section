import React, {  useState } from 'react'

function Form() {
    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();

        const formData={
            name,
            email
        };
        localStorage.setItem('formData',JSON.stringify(formData));
        alert("Form is Submitted");

        SetName('');
        SetEmail('');
    }
    return (
        <>
            <div className='flex flex-col  items-center justify-center py-6'>
                <h1>Basic Form</h1>
                <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <div className='py-2'>
                    <input type='text' placeholder='Enter your name'
                        value={name} onChange={(e) => SetName(e.target.value)}
                        className='border border-radius'
                    />
                    </div>
                   
                    <div className='py-2'>
                    <input type='email' placeholder='Enter your email'
                        value={email} onChange={(e) => SetEmail(e.target.value)} 
                        className='border '/>
                    </div>
                   
                </div>
                <button  type='submit' className='border'>Submit</button>

                </form>
               

            </div>
        </>
    )
}

export default Form