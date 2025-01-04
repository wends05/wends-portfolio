"use client";
import { motion } from "motion/react";

const nameVariants = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
};

const nameChildrenVariants = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
};
const Hero = () => {
  return (
    <div className="relative flex h-screen min-h-[400px] justify-center px-4 text-center">
      <div className="self-center">
        <motion.h1
          initial="initial"
          whileInView="whileInView"
          variants={nameVariants}
          transition={{
            staggerChildren: 0.5,
          }}
        >
          <motion.span variants={nameChildrenVariants}>Wendell </motion.span>
          <motion.span variants={nameChildrenVariants}>Terence </motion.span>
          <motion.span variants={nameChildrenVariants}>Dador </motion.span>
        </motion.h1>
        <div>
          Bachelor of Science
          <br />
          in
          <span className="text-secondary-500"> Software Engineering</span>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 flex w-screen items-center justify-end gap-2 lg:right-32">
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
