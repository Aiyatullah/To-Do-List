import React,{useState} from "react";
import './ToDoList.css'; 
function ToDoList(){
    const [task,setTask]=useState([]);
    const[newTask,setNewTask]=useState([])

    function HandleInputChange(event){
        setNewTask(event.target.value)
    }

    function AddTask(){
        if(newTask.trim() !==""){
            setTask(t=>[...t,newTask]);
            setNewTask("");
        }
      
    }

    function DeleteTask(index){
        const updateTasks = task.filter((tasks,i)=> i!==index);
        setTask(updateTasks)
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedtasks=[...task];
            [updatedtasks[index],updatedtasks[index-1]]=[updatedtasks[index-1],updatedtasks[index]];
            setTask(updatedtasks);
        }
    }
    function moveTaskDown(index){
        if(index<task.length-1){
            const updatedtasks=[...task];
            [updatedtasks[index],updatedtasks[index+1]]=[updatedtasks[index+1],updatedtasks[index]];
            setTask(updatedtasks);
        }
    }
    return(<>
    <div className="to-do-list">
        <h1>To-do-list</h1>

        <div className="input-container">
            <input type='text' placeholder="enter a text"
            value={newTask} onChange={HandleInputChange}>
            </input>
            <button
            className="add-button" onClick={AddTask}>Add</button>
        </div>
        <ol>
            {task.map((tasks,index) => ( <li key={index}>
                <span className="text">{tasks}</span>
                <button className="delete-button" onClick={()=>DeleteTask(index)}>delete</button>
                <button className="up-button" onClick={()=>moveTaskUp(index)}>☝️</button>
                <button className="down-button" onClick={()=>moveTaskDown(index)}>👇</button>
            </li> ))}
        </ol>

    </div>
    </>)
}
export default ToDoList