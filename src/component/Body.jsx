import React from 'react'
import '../App.css'
import {useState} from 'react'
import AddTask from './AddTask';

const Body = (props) => {
    const [completedTask,setCompletedTask] = useState(0);
    const [inputValues, setInputValues] = useState("");
    const [todoList,setTodoList] = useState([]);

   
    const handleOnChange = (event) => {
          setInputValues(event.target.value);
    }

    const clickHandler = () =>{
        const newTask = { id: todoList.length,info: inputValues };
        setTodoList([...todoList,newTask]);
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
                {todoList.map((task,index) =>
                     <AddTask
                     id={task.id}
                     task={task.info}
                     setTodoList={setTodoList}
                     setCompletedTask={setCompletedTask}
                     completedTask={completedTask}
                     todoList={todoList}
                     />
                )}
            </ul>
        </div>
    </div>
  )
}
export default Body;
