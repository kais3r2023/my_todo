import React from "react";

export interface ToggleProps {
  isOn: boolean;
  handleToggle: () => void;
}

export const ToggleSwitch: React.FC<ToggleProps> = ({ isOn, handleToggle }) => {
  return (
    <div className="flex items-center w-fit border-2 rounded-full border-black border-b-4 col-start-3">
      <div
        className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform ${
            isOn ? "translate-x-6" : "translate-x-0"
          } transition-transform duration-300`}
        ></div>
      </div>
    </div>
  );
};
