import React, { useState } from "react";

const TaskItem = (props) => {
  const [taskCompleted, setTaskCompleted] = useState(false);
  const onCheck = (event) => {
    setTaskCompleted(!taskCompleted);
    props.onCheckItem(taskCompleted)
  };
  return (
    <div>
      {props.tasks == "" ? (
        <p>No any task added.</p>
      ) : (
        props.tasks.map((task) => {
          return (
            <ul key={task.id}>
              <div className="list-item d-flex align-items-center ">
                <input onChange={onCheck} type="checkbox" className="mr-4" />{" "}
                <label>{task.task}</label>
              </div>
            </ul>
          );
        })
      )}
    </div>
  );
};
export default TaskItem;
