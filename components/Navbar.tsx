import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between p-4">
      <div className="h-10 w-10 bg-primary-500"></div>
      <Link href={"/about"} className="">
        about
      </Link>
    </nav>
  );
};

export default Navbar;
