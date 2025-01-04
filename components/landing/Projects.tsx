import Project from "@/components/Project";
import capycopy from "@/public/projectImages/capycopy.jpg";
import jankenfun from "@/public/projectImages/jankenfunproject.jpg";
import baconawa from "@/public/projectImages/baconawa.jpg";
import clicker from "@/public/projectImages/godotproject.jpg";
import setemp from "@/public/projectImages/se-temp.jpg";
import {
  SiCss3,
  SiFirebase,
  SiGodotengine,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";

const Projects = () => {
  return (
    <div className="relative flex flex-col text-center">
      <div className="h-40 w-full bg-gradient-to-t from-neutral-700" />
      <div className="bg-neutral-700 px-4 py-20">
        <h3>What I&apos;ve made so far</h3>
        <p className="label text-secondary-500">Projects</p>
      </div>
      <div>
        <Project
          title="JankenFun (JS)"
          author="self"
          description="A game for Robotopia Iloilo (2023). Written in vanilla JavaScript"
          image={jankenfun}
          date={new Date(2023, 10)}
          github="https://github.com/wends05/jankenfun"
          tech={
            <>
              <SiJavascript />
              <SiHtml5 />
              <SiCss3 />
            </>
          }
        />
        <Project
          title="CapyCopy"
          author="self"
          description="A web application based on my classmate's project for a certain subject.
          This is my first project in using React and Typescript together with Vite. I used this as 
          a playground for experimenting with web development in the client."
          image={capycopy}
          date={new Date(2023, 12)}
          github="https://github.com/wends05/capycopy"
          livelink="https://wends05.github.io/capycopy/"
          tech={
            <>
              <SiReact />
              <SiTypescript />
              <SiVite />
              <SiReactrouter />
            </>
          }
        />
        <Project
          title="Baconawa and Eggs"
          author="Team NYATS (2024)"
          description="Game made for The Odyssey Festival (2024). Released Aug 2024. Under development for more gameplay features."
          image={baconawa}
          date={new Date(2024, 8)}
          github="https://github.com/wends05/Baconawa-and-Eggs"
          tech={
            <>
              <SiGodotengine />
            </>
          }
        />
        <Project
          title="Clicker Game"
          author=""
          description="A project made for a certain group project in university. This is my first project in Game Development, and in Godot."
          image={clicker}
          date={new Date(2023, 12)}
          github="https://github.com/wends05/clicker-game"
          tech={
            <>
              <SiGodotengine />
            </>
          }
        />
        <Project
          title="Software Engineering Web App"
          author="SE 2024 - 2025"
          description="Official Software Engineering Department Web Application."
          image={setemp}
          date={new Date(2023, 12)}
          livelink=""
          tech={
            <>
              <SiNextdotjs />
              <SiTailwindcss />
              <SiFirebase />
              <SiReactquery />
            </>
          }
        />
      </div>
      <div className="h-40 w-full bg-gradient-to-b from-neutral-700" />
    </div>
  );
};

export default Projects;
