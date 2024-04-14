import React, {useState} from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (!newTask) return;
        setTasks([...tasks, newTask])
        setNewTask('');
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index))
    };

    return (
        <div>
            <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)}/>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => {
                   return <li key={index}>{task}<button onClick={()=>deleteTask(index)}>Delete</button></li>
                })

                }
            </ul>
        </div>
    )


}

export default ToDoList;