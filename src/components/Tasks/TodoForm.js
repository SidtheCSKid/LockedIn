import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value);

        setValue('');
    }

  return (
    // <div>
    //     <form className="TodoForm" onSubmit={handleSubmit}>
    //         <input type="text" className='todo-input' placeholder='What is the task today?' 
    //         value={value} onChange={handleChange}></input>
    //         <button type="submit" className='todo-btn'>Add Task</button>
    //     </form>
    // </div>
    <div>TodoForm</div>
  )
}

export default TodoForm

// import React from 'react'

// const TodoForm = () => {
//   return (
//     <div>TodoForm</div>
//   )
// }

// export default TodoForm