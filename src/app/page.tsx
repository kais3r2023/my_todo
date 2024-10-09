"use client";

import React from "react";
import { useState } from "react";
import Header from "@/components/header/Header";
import { Board } from "@/components/board/Board";
import { Task, TaskProps } from "@/components/task/Task";
import { ToggleSwitch } from "@/components/toggleSwitch/ToggleSwitch";

const tareasArray = [
  {
    date: "1/Ene/24",
    hour: "4h:00",
    taskName: "Hacer Desayuno",
    isOn: true,
    handleToggle: () => {},
  },
  {
    date: "18/Nov/24",
    hour: "10h:00",
    taskName: "Cena Romantica",
    isOn: false,
    handleToggle: () => {},
  },
];

// Recordar video de youtube sobre estado inicial de componentes clientes (no pueden recibir datos del servidor)

export default function Home() {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskProps[]>(tareasArray); // provisional para ver el funcionamiento de Board

  //Funcion manipular el estado del ToggleSwitch
  const handleToggle = (): void => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <main>
        <Header />
        <Board tasks={tasks} />
        <ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
        <ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
