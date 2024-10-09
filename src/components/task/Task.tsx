import React from "react";
import { ToggleSwitch, ToggleProps } from "../toggleSwitch/ToggleSwitch";

interface TaskDataProps {
  date: string;
  hour: string;
  taskName: string;
}

export type TaskProps = TaskDataProps & ToggleProps;

export const Task: React.FC<TaskProps> = ({
  isOn,
  handleToggle,
  date,
  hour,
  taskName,
}) => {
  return (
    <div className="grid grid-cols-[144px,400px] border-2 border-black border-b-8 rounded-full">
      <div className="border-r-2 border-black w-36 grid grid-rows-2 p-1 justify-items-center text-xs">
        <div className="row-start-1 ">{date}</div>
        <div className="row-start-2">{hour}</div>
      </div>
      <div className="grid grid-cols-2 justify-items-center p-1">
        <h3 className="col-start-1 col-end-3 text-base grid items-center">
          {taskName}
        </h3>
        <ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
      </div>
    </div>
  );
};
