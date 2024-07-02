import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan} from '@fortawesome/free-regular-svg-icons'
import { faPencil, faCheck, faTrash, faGripVertical } from '@fortawesome/free-solid-svg-icons'
import Contenteditable from '../ContentEditable'
import CategorySelectorDropdown from './CategorySelectorDropdown'

const TaskCategoryWrapper = ({taskObject, currCategoryObject, categories, toggleEditCategory}) => {
    const [categoryTitle, setCategoryTitle] = useState(currCategoryObject.title);


    const handleCategoryChange = (updatedCategoryTitle) => {
        setCategoryTitle(updatedCategoryTitle);
    }

  return (
    <div className='TaskCategoryWrapper'>    
        <div onClick={() => toggleEditCategory(taskObject.id)} className="CategoryButton relative text-center w-fit cursor-pointer hover:bg-slate-200 p-1 rounded-md text-sm">
            {currCategoryObject.title}
        </div>
        {taskObject.isEditingCategory ? (<CategorySelectorDropdown currCategoryObject={currCategoryObject} categories={categories}/>) : null}
    </div>
  )
}

export default TaskCategoryWrapper