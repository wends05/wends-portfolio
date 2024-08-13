import {
  SiCsharp,
  SiCss3,
  SiGo,
  SiGodotengine,
  SiHtml5,
  SiPython,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

const Languages = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-[400px]">
      <div className="relative rounded-md bg-neutral-800 p-4 text-center drop-shadow-lg">
        <h3>Written</h3>
        <p>in these languages</p>
        <SiHtml5 className="absolute -top-10 -left-10" />
        <SiCss3 className="absolute -top-12 left-9" />
        <SiPython className="absolute -top-16 right-9 " />
        <SiTypescript className="absolute -top-12 -right-8" />
        <SiGodotengine className="absolute -bottom-10 left-5" />
        <SiCsharp className="absolute -translate-x-1/2 left-1/2 -bottom-20" />
        <SiGo className="absolute -bottom-12 right-5" />
      </div>
    </div>
  );
};

export default Languages;
