"use client";

import React from "react";
import { useState } from "react";
import Header from "@/components/header/Header";
import Image from "next/image";
import { Tarea } from "@/components/tarea/Tarea";

// Recordar video de youtube sobre estado inicial de componentes clientes (no pueden recibir datos del servidor)

export default function Home() {
  const [isOn, setIsOn] = useState<boolean>(false);

  //Funcion manipular el estado del ToggleSwitch
  const handleToggle = (): void => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <main>
        <Header />
        <Tarea isOn={isOn} handleToggle={handleToggle}></Tarea>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
