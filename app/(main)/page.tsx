import Hero from "../../components/landing/Hero";
import Principles from "../../components/landing/Principles";
import Projects from "../../components/landing/Projects";
import Skills from "../../components/landing/Skills";
import Goal from "../../components/landing/Goal";

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
