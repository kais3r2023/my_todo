import React from "react";
import { Task, TaskProps } from "../task/Task";

interface BoardProps {
  tasks: TaskProps[];
}

export const Board: React.FC<BoardProps> = ({ tasks }) => {
  return (
    <div>
      <h2> Mis Tareas </h2>
      <div>
        {tasks.map((task, index) => {
          return (
            <Task
              key={index}
              date={task.date}
              hour={task.hour}
              taskName={task.taskName}
              isOn={task.isOn}
              handleToggle={task.handleToggle}
            />
          );
        })}
      </div>
    </div>
  );
};
