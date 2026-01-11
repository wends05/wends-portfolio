"use client";

import { type ReactNode, use } from "react";
import { TransitionContext } from "@/utils/TransitionProvider";

interface ITransitionLink {
  href: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const TransitionLink = ({
  href,
  title,
  children,
  className,
}: ITransitionLink) => {
  const { transition } = use(TransitionContext);
  return (
    <button
      type="button"
      className={`w-max ${className}`}
      onClick={() => transition(href, title)}
    >
      {children}
    </button>
  );
};

export default TransitionLink;
