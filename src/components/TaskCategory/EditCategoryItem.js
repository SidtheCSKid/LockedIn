import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan} from '@fortawesome/free-regular-svg-icons'
import { faPencil, faCheck, faTrash, faGripVertical } from '@fortawesome/free-solid-svg-icons'
import Contenteditable from '../ContentEditable'

const CategoryItem = ({categoryObject}) => {
  return (
    <div className='p-1 flex items-center hover:bg-gray-100 rounded-md bg-red-400'>
        <div className='mr-2 ml-1 leading-none flex items-center hover:cursor-grab'>
            <FontAwesomeIcon icon={faGripVertical}/>
        </div>

        <div className='flex-grow relative z-0 mr-3'>
            {/* <Contenteditable value={categoryTitle} onChange={handleCategoryChange}/> */}
            <div className="bg-red-200 w-fit min-w-0 px-2 py-1 rounded-md">{category}</div>
        </div>

        <div className="buttonGroup ml-auto flex justify-between gap-3 mr-2">
                <button className='leading-none flex items-center'>
                    <FontAwesomeIcon icon={faPencil}/>
                </button>
                <button className='leading-none flex items-center'>
                    <FontAwesomeIcon icon={faTrash} className='text-red-700'/>
                </button>
        </div>
    </div>
  )
}

export default CategoryItem