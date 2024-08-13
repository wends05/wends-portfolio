import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Principles from "./Principles";
import Projects from "./Projects";
import Skills from "./Skills";
import Goal from "./Goal";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Principles />
      <Skills />
      <Projects />
      <Goal />
    </main>
  );
}
