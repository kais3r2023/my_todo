import React from "react";
import { ToggleSwitch, ToggleSwitchProps } from "../toggleSwitch/ToggleSwitch";

export const Tarea: React.FC<ToggleSwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <div className="grid grid-cols-[144px,400px] border-2 border-black border-b-8 rounded-full">
      <div className="border-r-2 border-black w-36 grid grid-rows-2 p-1 justify-items-center text-xs">
        <div className="row-start-1 ">Lun 10/01/2024</div>
        <div className="row-start-2">4:00 am</div>
      </div>
      <div className="grid grid-cols-2 justify-items-center p-1">
        <h3 className="col-start-1 col-end-3 text-base grid items-center">
          Hacer desayuno
        </h3>
        <ToggleSwitch
          isOn={isOn}
          handleToggle={handleToggle}
          className="col-start-3 "
        />
      </div>
    </div>
  );
};
