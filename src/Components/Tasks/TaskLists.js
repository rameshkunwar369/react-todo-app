import React, { useState } from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskLists = (props) => {
  const [taskCompleted, setTaskCompleted] = useState(true);
  const onCheckItem = (checked) => {
    setTaskCompleted(!checked);
props.onCheckedItem(taskCompleted)
  };
  return (
    <div className="card container">
      <div className="card-body">
        <TaskItem tasks={props.tasks} onCheckItem={onCheckItem} />
      </div>
    </div>
  );
};
export default TaskLists;
