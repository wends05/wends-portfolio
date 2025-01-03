import Image from "next/image";
import Link from "next/link";
import React from "react";
import TransitionLink from "./TransitionLink";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between p-4">
      <TransitionLink title="Home" href={"/"}>
        <div className="h-10 w-10 bg-primary-500"></div>
      </TransitionLink>
      <TransitionLink href={"/about"} title="About" className="">
        about
      </TransitionLink>
    </nav>
  );
};

export default Navbar;
