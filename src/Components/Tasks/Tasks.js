import React, {useState} from 'react'
import AddUserForm from '../Form/AddUserForm'
import TaskLists from './TaskLists'
import './Tasks.css'
export default function Tasks(props) {
  const [taskCompleted, setTaskCompleted] = useState(false);

  const onAddTask = item =>{
    console.log('item', item)
    props.handleAddTask(item)
  }
  const onCheckedItem = checkedItem =>{
    console.log(checkedItem, 'checkde')
    setTaskCompleted(!taskCompleted)
    props.handleCheckItem(taskCompleted)
  }
  return (
    <div className='tasks-container'>
        <AddUserForm onAddTask={onAddTask} />
        <TaskLists tasks={props.tasks} onCheckedItem={onCheckedItem}/>

    </div>
  )
}
