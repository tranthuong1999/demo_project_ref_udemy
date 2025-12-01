import React, { useRef } from 'react'
import Input from '../Input'
import Modal from '../Modal';

const NewProject = ({ onSave, onCancel }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();
  const modal = useRef();

  const handleSavePoject = () => {
    const enterdTitle = titleRef.current.value;
    const enterdDescription = descRef.current.value;
    const enterdDueDate = dueDateRef.current.value;

    if (enterdTitle.trim() === "" || enterdDescription.trim() === "" || enterdDueDate.trim() === "") {
      modal.current.open();
      return;
    }
    onSave({
      title: enterdTitle,
      description: enterdDescription,
      dueDate: enterdDueDate
    })
  }

  const handleCancelProject = () => {
    onCancel()
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className='text-xl font-bold text-stone-700 my-4'> Invalid input</h2>
        <p className='text-stone-600 mb-4'> Oops... look like you forgot to enterd a value</p>
        <p className='text-stone-600 mb-4'> Please mak sure you provider valid value for every inpit field</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li> <button onClick={handleCancelProject} className='text-stone-800 hover:text-stone-950'> Cancel</button></li>
          <li> <button onClick={handleSavePoject} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50  hover:text-stone-950'> Save</button></li>
        </menu>
        <div>
          <Input label="Title" ref={titleRef} />
          <Input label="Description" textarea ref={descRef} />
          <Input label="Due Date" type="date" ref={dueDateRef} />
        </div>
      </div>
    </>

  )
}

export default NewProject