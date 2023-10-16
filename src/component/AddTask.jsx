import React from 'react'
import { useDispatch } from 'react-redux';
import {increaseCompletedTask,deleteItemsFromList} from '../utils/bodySlice'; 
 
const AddTask = (props) => {
  const dispatch = useDispatch();
    const {task,bodyItems,id} = props;
    const handleClick = () => {
        dispatch(increaseCompletedTask());
        dispatch(deleteItemsFromList(id));
    }
    
    if(bodyItems.length ===0)
    {
        
    }
  return (
    <div className="addTask">
      <li>{task}</li>
      <button onClick={handleClick}>completed</button>
    </div>
  )
}

export default AddTask