import React from 'react'
import { useState } from 'react'; 
 
const AddTask = (props) => {
    const {task,id,completedTask,setCompletedTask,setTodoList,todoList} = props;
    const handleClick = () => {
      setTodoList(todoList.filter(item => item.id !== id));
      setCompletedTask(completedTask+1);
    }
    
  return (
    <div className="addTask">
      <li>{task}</li>
      <button onClick={handleClick}>completed</button>
    </div>
  )
}

export default AddTask