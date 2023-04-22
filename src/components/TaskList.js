import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks } = props;
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
