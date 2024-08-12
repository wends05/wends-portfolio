import Skill from "@/components/Skill";
import {
  SiExpo,
  SiFlutter,
  SiGodotengine,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import { Code2, Gamepad2, Smartphone } from "lucide-react";
import OtherSkills from "./OtherSkills";

const Skills = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="relative">
          <div className="absolute -left-[15vw] -top-20 flex flex-col items-center">
            <Code2 />
            <h5>Web</h5>
          </div>
          <div className="absolute -right-[3vw] -top-28 flex flex-col items-center md:-top-[15vw]">
            <Smartphone />
            <h5>Mobile</h5>
          </div>
          <div className="absolute -bottom-20 left-1/2 flex -translate-x-1/2 transform flex-col items-center md:-bottom-[12vw] md:-right-[20vw] md:translate-x-0">
            <Gamepad2 />
            <h5>Game</h5>
          </div>
          <h1>Skills</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 px-4 py-12 lg:h-[500px] lg:flex-row max-w-screen-md">
        <Skill
          name="Web"
          description="Web applications and sites is a common way to create software used for multiple purposes. It is a common topic in software engineering."
          tech={
            <>
              <SiNextdotjs />
              <SiReact />
              <SiTailwindcss />
              <SiPrisma />
              <SiReactquery />
            </>
          }
        />
        <Skill
          name="Mobile"
          description="Some of our projects required us to create software for a certain problem in society. Mobile applications were one of the options."
          tech={
            <>
              <SiFlutter />
              <SiReact />
              <SiExpo />
            </>
          }
        />
        <Skill
          name="Game"
          description="Some of the hackathons we joined allowed us to experience making games. These have helped us understand the basics, proper workflow, and requirements in creating games."
          tech={
            <>
              <SiGodotengine />
            </>
          }
        />
      </div>
      <OtherSkills />
    </div>
  );
};

export default Skills;
