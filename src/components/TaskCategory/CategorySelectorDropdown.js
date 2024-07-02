import React, { useCallback, useEffect } from 'react'
import CategoryItem from './CategoryItem'
import Contenteditable from '../ContentEditable'

const CategorySelectorDropdown = ({currCategoryObject, categories}) => {

    useEffect(() => {  
        console.log(categories); 
    });

  return (
    <div className='CategorySelectorDropdown mt-1 w-[25vw] border shadow-md rounded-md p-2 bg-white absolute z-20'>
        {categories.map(category => {
            return (<CategoryItem categoryObject={category}/>)
            })
        }
    </div>
  )
}

export default CategorySelectorDropdown