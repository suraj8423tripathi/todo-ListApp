import React from 'react'
import '../App.css'
import {useState} from 'react'
import AddTask from './AddTask';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoList} from '../utils/bodySlice';

const Body = (props) => {
    //const [completedTask,setCompletedTask] = useState(0);
    const [inputValues, setInputValues] = useState("");
   // const [todoList,setTodoList] = useState([]);

    const dispatch = useDispatch(); 

   // Subscribing to the store using a selector

    const bodyItems = useSelector((store) => store.body.items);
    const completedTask = useSelector((store) => store.body.completedtask);

  /*
     We can do in this way also but this way is very inefficient
     const store = useSelector(store => store);
    const bodyItems = store.body.items;
    const completedTask = store.body.completedtask;
    */


    const handleOnChange = (event) => {
          setInputValues(event.target.value);
    }

    const clickHandler = () =>{
        const newTask = { id: bodyItems.length,info: inputValues };
        dispatch(addTodoList(newTask));
        setInputValues('');
    }
  return (
    <div>
        <input type="text" 
           onChange={handleOnChange}
           value={inputValues}
        />
        <button className="body_button" onClick={clickHandler}>Add</button>
        <div className = "task">
            <ul className="pendingAndconplete">
                <li>Pending Task</li>
                <li>Completed Task {completedTask}</li>
            </ul>
            <ul>
                {bodyItems.map((task,index) =>
                     <AddTask
                     id={task.id}
                     task={task.info}
                     bodyItems={bodyItems}
                     //setTodoList={setTodoList}
                     //increaserCompletedTask={increaserCompletedTask}
                     //setCompletedTask={setCompletedTask}
                     completedTask={completedTask}

                     />
                )}
            </ul>
        </div>
    </div>
  )
}
export default Body;
