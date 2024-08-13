import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <h1>About</h1>
        <p>this website</p>
      </div>
      <div className="p-4">
        <p>Hi!</p>
        <div>
          This project lasted me 2 months. I started it last May 2024, because I
          already had knowledge of how to create websites / web applications
          with React, which is the current standard library (along with Next.js)
          for making SPAs. Knowing also that in the future, I&apos;ll be using
          this same portfolio for applying for jobs, why not make it now, and
          then eventually update this as I go through college.
        </div>

        <div>
          This project was only supposed to be finished in development for like
          a week or so. But I really had no clear idea on what to write on my
          portfolio, and considering my work style is very messy, It got delayed
          until August of 2024, which is when I finally finished this project.
        </div>
      </div>
    </div>
  );
};

export default About;
