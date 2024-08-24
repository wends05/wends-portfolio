import Image from "next/image";
import figma1 from "@/public/about/figma1.jpg";
import figma2 from "@/public/about/figma2.jpg";

import wireframe1 from "@/public/about/wireframe1.jpg";
import wireframe2 from "@/public/about/wireframe2.jpg";

import content1 from "@/public/about/content1.jpg";
import content2 from "@/public/about/content2.jpg";
import ImageWithCaption from "@/components/ImageWithCaption";
const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <h1>About</h1>
        <p>this website</p>
      </div>
      <div className="space-y-12 self-center p-4 md:max-w-screen-md md:p-10">
        <div className="space-y-5">
          <h4>Hi!</h4>
          <p>
            This project took me about 3 - 4 months to finish. Why? I was not
            contented with the design 😭
          </p>
          <p className="text-lg font-bold">
            I took too much time finding references and looking at web
            portfolios realizing only at the end I get stressed out not being
            able to get my own creativity out without practice.
          </p>
        </div>
        <div className="space-y-5">
          <h5>Design</h5>
          <p>
            Design is the biggest part of this project, considering this is a
            portfolio website.
          </p>
          <p>
            So, I took my time to actually have a draft design on Figma before
            coding it, but later I realized I needed to specify what content I
            need to place or else the design won&apos;t make sense (also because
            I want to copy some reference of a portfolio online), but then I
            didn&apos;t know what content to place, and then I gave up, then
            continued until I got to the design again, but then I didn&apos;t
            like the new design, and then I saw more references that I really
            liked, and the cycle continued.
          </p>
          <div className="flex flex-col">
            <ImageWithCaption
              src={figma1}
              className="h-[40vh] min-h-[350px] md:h-[70vh]"
              caption="I never finished the design in Figma 😭"
              imageClassName="object-left-top"
            />
            <ImageWithCaption
              src={figma2}
              className="h-[50vh] min-h-[350px] md:h-[80vh]"
              caption="This was the time I just decided to make a wireframe instead. I gave up on figma here."
              imageClassName="object-top"
            />
          </div>
          <p>
            Then, considering that I didn&apos;t have to collaborate with
            anyone, I decided to just wireframe on Freeform, which gave me an
            outline of what needs to be placed where, giving me freedom to
            change anything during development.
          </p>
          <div className="space-y-2">
            <ImageWithCaption
              src={wireframe1}
              className="h-[40vh] min-h-[350px] md:h-[70vh]"
              caption=""
            />
            <ImageWithCaption
              src={wireframe2}
              className="h-[40vh] min-h-[350px] md:h-[70vh]"
              caption="It's literally a rough outline of what the website's supposed to look like, that's why it looks so ugly lol."
              imageClassName="object-bottom"
            />
          </div>
          <p>
            Despite ending up wireframing, I was able to learn a thing or two in
            Figma though. So it&apos;s still a win despite remaking the designs
            again and again.
          </p>
        </div>
        <div className="space-y-5">
          <h5>Content</h5>
          <p>
            I&apos;ve already learned some skills from my first year due to some
            projects that required us to learn multiple technologies, languages,
            frameworks, and such. So I had no problem writing what I wanted to
            write on my website.
          </p>
          <div>
            <ImageWithCaption
              src={content1}
              className="h-[40vh] min-h-[350px] md:h-[100vh]"
              imageClassName="object-top"
              caption="Some text in my docs"
            />
            <ImageWithCaption
              src={content2}
              className="h-[40vh] min-h-[350px]"
              imageClassName=" object-left-top"
              caption="Projects part draft 😃"
            />
          </div>
        </div>
        <div className="space-y-5">
          <h5>Development</h5>
          <p>
            This project was supposed to be an attempt to learn framer-motion,
            Figma, and Github to get started on trying to improve my Front-end
            skills. But I thought, maybe I also need to learn how to maintain a
            software, because it&apos;s something essential that I need to learn
            also as a Software Engineer. So I made a portfolio where I&apos;ll
            be changing the projects I want to display and the skills I&apos;ve
            learned over time.
          </p>
          <p>
            Might even think of writing back-end code to just constantly change
            what is displayed on the home page, and create a separate page for
            all of the projects I&apos;ve displayed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
