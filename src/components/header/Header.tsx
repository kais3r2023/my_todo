import Image from "next/image";
import Avatar from "@/images/avatar(21).png";

const Header: React.FC = () => {
  return (
    <div className="grid justify-items-center">
      <h1 className="mt-20 text-5xl">Organizador de Tareas</h1>
      <div className="border-2 border-b-8 border-black rounded-3xl p-5 w-96 mt-12 grid grid-rows-1 grid-cols-[auto,1fr]">
        <Image
          src={Avatar}
          alt="Imagen Avatar"
          className="rounded-full col-start-1"
          width={96}
          height={96}
        />
        <div className="col-start-2 flex flex-col justify-center items-center">
          <h2 className="text-4xl">Hola, Daniel</h2>
          <h3 className="mt-3">Tienes 0 tareas pendientes</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
