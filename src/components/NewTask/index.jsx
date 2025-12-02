import React, { useState } from 'react'

const NewTask = ({ onAdd }) => {

    const [enteredTask, setEnterdTask] = useState();

    const handleChange = (event) => {

        setEnterdTask(event.target.value);
    }

    const handleClick = () => {
        onAdd(enteredTask)
        setEnterdTask('');
    }

    return (
        <div className='flex items-center gap-4'>
            <input
                type='text'
                className='w-64 px-2 py-1 rounded-sm bg-stone-200'
                onChange={handleChange}
                value={enteredTask}
            />
            <button onClick={handleClick} className='text-stone-700 hover:text-stone-950'> Add task</button>
        </div>
    )
}

export default NewTask