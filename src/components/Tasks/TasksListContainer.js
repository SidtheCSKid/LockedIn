import React, { useEffect, useState } from 'react'
import Task from './Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import EditTask from './EditTask'
import {v4} from 'uuid';

const TasksListContainer = (props) => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('tasks'));
    if (data) {
      setTasks(data);
    }
    console.log("getting data");
  }, []);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('updated tasks in local storage');

    const uniqueCategories = Array.from(new Set(tasks.map(task => task.category)));
    setCategories(uniqueCategories);
  }, [tasks]);

  const addTask = () => {
      setTasks([...tasks, {
        id: v4(), 
        taskTitle: "", 
        completed: false, 
        isEditing: true, 
        category: {
          title: "category",
          isEditing: false
        }, 
        isEditingCategory: false}]);
  }

  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  }

  const editTaskTitle = (title, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, taskTitle: title, isEditing: false} : task
      )
    );
  }

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  /* launch the dropdown menu */
  const toggleEditCategory = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditingCategory: !task.isEditingCategory } : task
      )
    );
  }


  const devPrint = () => {
    console.log(categories);
  }

  return (
    <div>
      <div className="TasksSelectorsContainer flex justify-between mb-2"> 
            <div className="TasksCategoriesContainer flex justify-evenly gap-4">
                <div className='border-2 rounded-2xl px-2'>selector</div>
                <div className='border-2 rounded-2xl px-2'>selector</div>
                <div className='border-2 rounded-2xl px-2'>selector</div>
            </div>
            <div className="TasksNavigatorContainer flex justify-between gap-2">
                <div className='flex items-center transition hover:-translate-x-1'><FontAwesomeIcon icon={faArrowLeft} className=''/></div>
                <div className='border-2 rounded-2xl px-2'>Today</div>
                <div className='flex items-center transition hover:translate-x-1'><FontAwesomeIcon icon={faArrowRight} className=''/></div>
            </div>
        </div>

        <div className='TasksListContainer h-fit flex gap-4'>
      {/* <button className="bg-gray-300" onClick={devPrint}>Click</button> */}
      <div className='TaskListColumn w-fit'>
        <div className='bg-red-300 w-fit leading-none p-2 rounded-lg text-red-900 font-medium mb-2'>To Do</div>
        {tasks.map((task, index) => {
              return (
              <div>
                {task.isEditing ? 
                (<EditTask toggleEditCategory={toggleEditCategory} categories={categories} key={index} deleteTask={deleteTask} taskObject={task} title={task.taskTitle} currCategoryObject={task.category} editTaskTitle={editTaskTitle}/>) : 
                (<Task key={index} deleteTask={deleteTask} editTask={editTask} taskObject={task} title={task.taskTitle} currCategoryObject={task.category}/>)}
              </div>
              )
          })}
          <div onClick={addTask} className='NewButton cursor-pointer leading-none flex gap-2 items-center transition-colors ease duration-300 text-gray-400 rounded-md p-2 hover:bg-slate-100'>
            <FontAwesomeIcon icon={faPlus}/>  
            <div className='font-normal'>New Task</div>
          </div>
      </div>
        
     {/* This will be a tasklistcolumn component with certain props passed probsably*/}     
      {/* <div className='TaskListColumn w-fit'>
        <div className='bg-green-300 w-fit leading-none p-2 rounded-lg text-green-900 font-medium mb-2'>Done</div>
        {props.tasks.map((task) => {
              return <Task key={task.id} title={task.taskTitle} category={task.category}/>
          })}
          <div className='NewButton leading-none flex gap-2 items-center transition-colors ease duration-300 text-gray-400 rounded-md p-2 hover:bg-slate-100'>
            <FontAwesomeIcon icon={faPlus}/>  
            <div className='font-normal '>New Task</div>
          </div>
      </div> */}
        
    </div>
    </div>
    
  )
}

export default TasksListContainer