import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Oops!</h1>

      <p>This page cannot be found.</p>

      <Link href={"/"} className="underline">Return to home page</Link>
    </div>
  );
};

export default NotFound;
