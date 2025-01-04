import Image from "next/image";
import Link from "next/link";
import React from "react";
import TransitionLink from "./TransitionLink";
import { HomeIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between p-4 pt-5">
      <TransitionLink title="Home" href={"/"} className="">
        <HomeIcon />
      </TransitionLink>
      <TransitionLink href={"/about"} title="About" className="">
        about
      </TransitionLink>
    </nav>
  );
};

export default Navbar;
