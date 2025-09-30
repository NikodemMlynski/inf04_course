import { useState } from "react"

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState("");

    const onAddTask = () => {
        setTasks(prevTasks => [...prevTasks, currentTask]);
        setCurrentTask("");
    }
    
    const onDeleteTask = (task) => {
        setTasks(prevTasks => prevTasks.filter(t => t !== task));
    }

    return (
        <div>
            <div className="task_input">
                <input value={currentTask} onChange={(e) => setCurrentTask(e.target.value)} type="text" placeholder="Enter task"/>
                <button onClick={onAddTask}>Add</button>
            </div>
            <ul className="task_list">
                {
                    tasks.map((task, index) => (
                        <TaskItem key={index} task={task} onDelete={onDeleteTask}/>
                    ))
                }
            </ul>
        </div>
    )
}

function TaskItem({task, onDelete}) {
    return (
        <li>{task} <button onClick={() => onDelete(task)}>Delete</button></li>
    )
}