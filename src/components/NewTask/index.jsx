import React, { useState, useRef } from 'react'
import Modal from '../Modal';

const NewTask = ({ onAdd }) => {

    const [enteredTask, setEnterdTask] = useState('');
    const modal = useRef();


    const handleChange = (event) => {
        setEnterdTask(event.target.value);
    }

    const handleClick = () => {
        if (!enteredTask.trim()) {
            modal.current.open();
            return;
        }
        onAdd(enteredTask)
        setEnterdTask('');
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className='text-xl font-bold text-stone-700 my-4'> Invalid input</h2>
                <p className='text-stone-600 mb-4'> Oops... look like you forgot to enterd a value</p>
                <p className='text-stone-600 mb-4'> Please mak sure you provider valid value for every inpit field</p>
            </Modal>
            <div className='flex items-center gap-4'>
                <input
                    type='text'
                    className='w-64 px-2 py-1 rounded-sm bg-stone-200'
                    onChange={handleChange}
                    value={enteredTask}
                />
                <button onClick={handleClick} className='text-stone-700 hover:text-stone-950'> Add tasks</button>
            </div>
        </>

    )
}

export default NewTask