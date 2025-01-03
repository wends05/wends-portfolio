"use client";

import React, { ReactNode, useContext } from "react";
import { TransitionContext } from "@/utils/TransitionProvider";
const TransitionLink = ({
  href,
  title,
  children,
  className,
}: {
  href: string;
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  const { transition } = useContext(TransitionContext);
  return (
    <button
      className={`w-max ${className}`}
      onClick={() => transition(href, title)}
    >
      {children}
    </button>
  );
};

export default TransitionLink;
