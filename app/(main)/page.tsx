import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Principles from "./Principles";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Principles />
      <Skills />
      <Projects />
    </main>
  );
}
