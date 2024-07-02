import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Task from './Task';
import TasksDateTitle from './TasksDateTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import TasksListContainer from './TasksListContainer';

const TasksWrapper = () => {
    
    // useEffect(() => {
    //     console.log(tasks);
    // }, [tasks]);

  return (
    <div className="TasksWrapper">
        <div className='TaskHeaderContainer w-fit mb-2'>
            <div className="font-bold w-fit text-5xl inline-block leading-none">Tasks</div>
            <TasksDateTitle />
        </div> 

        <div className="TasksListContainer">
            <TasksListContainer/>
        </div>

        
    </div>
  )
}

export default TasksWrapper