import Header from "@/components/header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
