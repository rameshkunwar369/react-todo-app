import React, { useState } from "react";
import "./AddUserForm.css";

const AddUserForm = (props) => {

  const [enteredTask, setEnteredTask] = useState("");

  const inputChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };
  
  const handleTaskSubmit = (event) => {
    event.preventDefault();

    props.onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <form onSubmit={handleTaskSubmit}>
      <input
        value={enteredTask}
        onChange={inputChangeHandler}
        placeholder="Add Task To The List"
        type="text"
        className="form-control p-4 mb-5 a"
      />
    </form>
  );
};
export default AddUserForm;
