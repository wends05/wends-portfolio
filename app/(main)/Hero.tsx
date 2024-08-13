import React from "react";

const Hero = () => {
  return (
    <div className="relative flex min-h-[400px] h-screen justify-center px-4 text-center">
      <div className="h-max self-center">
        <div>
          Bachelor of Science
          <br />
          in
          <span className="text-secondary-500"> Software Engineering</span>
        </div>
        <h1>Wendell Terence Dador</h1>
      </div>
      <div className="absolute bottom-2  right-2 lg:right-32 flex w-screen items-center justify-end gap-2 ">
        <div className="h-1 bg-white sm:w-[20vh]"></div>
        <p className="">
          Earliest Graduation
          <span className="text-primary-300"> 2027</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
