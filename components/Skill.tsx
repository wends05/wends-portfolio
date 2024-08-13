import { ReactNode } from "react";

interface SkillProps {
  name: string;
  description: string;
  tech: ReactNode;
}

const Skill = ({ name, description, tech }: SkillProps) => {
  return (
    <div className="flex h-full w-full max-w-[350px] flex-col justify-between gap-2 rounded-lg bg-neutral-800 p-4 drop-shadow-lg">
      <div className="space-y-2">
        <h4>{name}</h4>
        <div className="flex items-center gap-2">{tech}</div>
      </div>
      <p className="w-[80%]">{description}</p>
    </div>
  );
};

export default Skill;
