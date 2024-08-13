"use client";

import Image, { StaticImageData } from "next/image";
import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

interface ProjectProps {
  title: string;
  author: string;
  description: string;
  image: StaticImageData;
  tech: ReactNode;
  github?: string;
  livelink?: string;
  date: Date;
  livelinktext?: string;
}

const Project = ({
  title,
  author,
  description,
  image,
  tech,
  github,
  livelink,
  date,
  livelinktext
}: ProjectProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <div
      ref={ref}
      className="relative flex h-screen min-h-[400px] overflow-hidden"
    >
      <motion.div
        className="absolute top-0 -z-10 h-full w-full overflow-hidden"
        style={{ y }}
      >
        <Image
          src={image}
          alt="title"
          fill
          className="sticky -z-10 h-full bg-opacity-70 object-cover"
        />
      </motion.div>
      <div className="absolute -z-10 h-full w-full bg-black opacity-50" />
      <div className="flex w-full flex-col justify-between p-4 text-start sm:p-8 md:p-16 lg:p-32">
        <div className="">
          <h1>{title}</h1>
          <h5>{author}</h5>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="w-[30%]">{description}</p>
            <div className="space-y-2">{tech}</div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              {github && (
                <Link href={github}>
                  <SiGithub />
                </Link>
              )}
              {
                livelink && (
                  <Link href={livelink} 
                  
                  className="bg-neutral-800 py-1 px-2 rounded-lg"
                  >
                    <div>{livelinktext ? livelinktext : "Live Link"}</div>
                  </Link>
                )
              }
            </div>
            {date.toUTCString().split(" ")[2] + " " + date.getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
