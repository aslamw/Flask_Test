import {useState} from 'react'
import './App.css';

function App() {
  const [tasks,setTasks] = useState([])

  function handleAddTask(event){
    if(event.key !== 'Enter' || event.target.value === ''){
      return
    }
    const content = event.target.value
    const localTasks = [...tasks]
    const newTask = {
      id:localTasks.length > 0 ? localTasks[localTasks.length - 1].id + 1 : 1,
      name: content,
      done: false
    }

    localTasks.push(newTask)
    setTasks(localTasks)

    event.target.value = ''
  }
  function handleDelete(taskId){
    const localTasks = [...tasks]
    const taskIndex = localTasks.findIndex((task)=> task.id === taskId)

    if(taskIndex === -1){
      return
    } 

    localTasks.splice(taskIndex, 1)
    setTasks(localTasks)
  }
  function completed(taskId){
    const localTasks = [...tasks]
    const find = localTasks.find((task) => task.id === taskId)

    if(!find){
      return
    }

    find.done = !find.done

    setTasks(localTasks)
  }


  return (
    <div className="App">
      <div>
        <input type='text' 
        placeholder='Nova tarefa'
        onKeyDown={(event)=>handleAddTask(event)}
        />
      </div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span className={`${task.done && 'task-done'}`}
                onClick={()=>completed(task.id) }>
                {task.name}
                </span>
              <button className='btn-del' onClick={() => handleDelete(task.id) }>
                X
              </button>
            </li>
          ))}
          
        </ul>
      </div>

    </div>
  );
}

export default App;
