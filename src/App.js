import React, { useState } from "react";

import Tasks from "./Components/Tasks/Tasks";
import Hero from "./Components/UI/Hero";

export default function App() {
  const tasks = [
    // {
    //   id: Math.random(),
    //   task: "Programming",
    // },
  ];
  const [tasksList, setTasksList] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);

  console.log(tasksList, "abc");
  const handleAddTask = (item) => {
    console.log("task added = ", item);
    setTasksList((prevTask) => {
      return [...prevTask, { task: item, id: Math.random() }];
    });
    setTaskCompleted((prevState) => {
      return [{ taskCompleted: false }];
    });
  };

  const handleCheckItem = (checkItem) => {
    setTaskCompleted(checkItem);
    console.log("abcccccccccc", taskCompleted);
  };
  console.log(typeof tasksList);
  return (
    <div className="app">
      <Hero />

      <Tasks
        tasks={tasksList}
        handleAddTask={handleAddTask}
        handleCheckItem={handleCheckItem}
      />
    </div>
  );
}
