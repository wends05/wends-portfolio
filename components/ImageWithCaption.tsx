"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface ImageWithCaptionProps {
  src: StaticImageData;
  className: string;
  caption: string;
  imageClassName?: string;
}

const ImageWithCaption = ({
  src,
  className,
  caption,
  imageClassName,
}: ImageWithCaptionProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={"flex flex-col py-2"}
    >
      <div className={"relative " + className}>
        <Image
          src={src}
          alt="figma1"
          fill
          className={"object-cover " + imageClassName}
        />
      </div>
      <p className="text-sm">{caption}</p>
    </motion.div>
  );
};

export default ImageWithCaption;
