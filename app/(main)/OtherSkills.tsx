import React from "react";
import {
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiNotion,
  SiOpenai,
  SiPostgresql,
} from "@icons-pack/react-simple-icons";
const OtherSkills = () => {
  return (
    <div className="flex min-h-[400px] max-w-[400px] flex-col items-center justify-center px-4 text-center">
      <div className="relative p-4 bg-neutral-800 rounded-lg drop-shadow-lg">
        <h2>Other Skills</h2>
        <p>
          Software Engineering is a diverse field. But there are certain tools
          that are required in multiple areas of software development.
        </p>
        <SiGithub className="absolute -top-10 left-5 sm:-left-[5vw]" />
        <SiGit className="absolute -top-20 left-24 md:left-28" />
        <SiFirebase className="absolute -top-28 right-24 md:right-28" />
        <SiPostgresql className="absolute -top-16 right-5 sm:-right-[5vw]" />
        <SiFigma className="absolute -bottom-24 left-[5vw] sm:left-0" />
        <SiGooglegemini className="absolute -bottom-16 left-24" />
        <SiOpenai className="absolute -bottom-20 right-24 -translate-x-1/2" />
        <SiNotion className="absolute -bottom-28 right-[5vw] sm:right-0" />
      </div>
    </div>
  );
};

export default OtherSkills;
