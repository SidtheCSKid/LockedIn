import React, { useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan} from '@fortawesome/free-regular-svg-icons'
import { faPencil, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Contenteditable from '../ContentEditable';
import TaskCategoryWrapper from '../TaskCategory/TaskCategoryWrapper';

const EditTask = ({title, currCategoryObject, taskObject, editTaskTitle, deleteTask, categories, toggleEditCategory}) => {
  const [titleValue, setTitleValue] = useState(title);
  const formRef = useRef(null);
  const placeholder = titleValue ? '' : 'What\'s the task?';  
  // const [isTyping, setIsTyping] = useState(false);

    const handleChange = (updatedTitleValue) => {
      setTitleValue(updatedTitleValue);
      // setIsTyping(true);
      // setTimeout(() => {
      //   setIsTyping(false);
      // }, 1500); // Change this timeout duration as needed
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        formRef.current.requestSubmit();
      }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editTaskTitle(titleValue, taskObject.id);
        
    }

  return (
    <div className="EditTask group shadow-md border bg-slate-50 border-gray-300 rounded-lg p-2 relative w-[25vw] mb-2">

      <form ref={formRef} onSubmit={handleSubmit} className='flex justify-between gap-2'>
        <div className="EditTaskBody min-w-0 grow">
            <div className="font-medium mb-2 break-words z-20 relative " onKeyDown={handleKeyDown}>
              <Contenteditable className="EditTaskTitle" value={titleValue} onChange={handleChange}/>
              <div className='font-normal text-gray-400 z-0 absolute top-0 left-0'>{placeholder}</div>
            </div>

            <TaskCategoryWrapper taskObject={taskObject} toggleEditCategory={toggleEditCategory} categories={categories} currCategoryObject={currCategoryObject}/>
        </div>
            <div className={`TaskActions flex grow-0 flex-col justify-between z-10 transition ease gap-4 ${taskObject.isEditingCategory ? "opacity-0":""}`}>
              <button type='submit' className="TaskDelete flex items-center hover:scale-110 transition ease cursor-pointer">
                <FontAwesomeIcon icon={faCheck} type='submit' className='text-green-700'/>
              </button>
              <button className="TaskDelete flex hover:scale-110 transition ease cursor-pointer">
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(taskObject.id)} className='text-red-700'/>
              </button>
            </div>
        
      </form>
      
      

    </div>
  )
}

export default EditTask