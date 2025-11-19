import React from 'react'

const Input = ({ label, textarea, ...props }) => {
    return (
        <div className='flex flex-col gap-1 my-4'>
            <p className='text-sm font-bold uppercase text-stone-500'> {label}</p>
            {textarea ? <textarea className='w-full p-1 border-b-2 rounded-sm bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600' {...props} /> : <input {...props} />}
        </div>
    )
}

export default Input