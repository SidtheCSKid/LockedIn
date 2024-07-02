import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan} from '@fortawesome/free-regular-svg-icons'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import TaskCategoryWrapper from '../TaskCategory/TaskCategoryWrapper'

const Task = ({editTask, currCategoryObject, title, taskObject, deleteTask}) => {
  const [titleValue, setTitleValue] = useState(title);
  const placeholder = titleValue ? titleValue : 'Untitled';  
  return (
    // <div className="Task group border border-black rounded-lg p-2 relative w-[25vw] mb-2 flex flex-grow-0 justify-between gap-2">

    //   <div className="TaskBody">
    //     <div className="TaskTitle font-medium break-words">{props.title}</div>
    //     <div className="TaskCategory">{props.category}</div>
    //   </div>
      
    //   <div className="TaskActions z-10 opacity-100 group-hover:opacity-100 transition ease flex flex-col justify-between">
    //     <div className="TaskDelete flex items-center hover:scale-110 transition ease cursor-pointer">
    //       <FontAwesomeIcon icon={faPencil}/>
    //     </div>
    //     <div className="TaskDelete flex items-center hover:scale-110 transition ease cursor-pointer">
    //       <FontAwesomeIcon icon={faTrash}/>
    //     </div>
    //   </div>

    // </div>
    
    <div className="Task group border border-gray-300 shadow-md transition-all rounded-lg p-2 relative w-[25vw] mb-2 flex justify-between gap-2 hover:bg-slate-50">

      <div className="TaskBody min-w-0 grow">
        <div className={`TaskTitle font-medium ${titleValue ? "" : "text-gray-400"} break-words mb-2 relative`}>{placeholder}</div>
        {/* <TaskCategoryWrapper className="ignore-hover" category={category}/> */}
        <div className="CategoryButton relative text-center w-fit">{currCategoryObject.title}</div>
      </div>
      
      <div className="TaskActions grow-0 z-10 opacity-0 group-hover:opacity-100 transition ease flex flex-col justify-between gap-4">
        <div className="TaskDelete flex items-center hover:scale-110 transition ease cursor-pointer">
          <FontAwesomeIcon icon={faPencil} onClick={() => editTask(taskObject.id)} />
        </div>
        <div className="TaskDelete flex items-center hover:scale-110 transition ease cursor-pointer">
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(taskObject.id)} className='text-red-700'/>
        </div>
      </div>

    </div>
  )
}

export default Task