"use client";
import { useAnimate } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ITransitionContext {
  transition: (href: string, title: string) => void;
}
export const TransitionContext = createContext({
  transition: (href: string, title: string) => {},
});
const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [scope, animate] = useAnimate();
  const [title, setTitle] = useState("");
  const [transitioning, setTransitioning] = useState(false);
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    const transition = async () => {
      await animate("#title", { opacity: 0 }, { duration: 0.25, delay: 0.5 });
      await animate("#bgtransition", { opacity: 0 });
      await animate(scope.current, { zIndex: -10 });
    };
    if (!transitioning) {
      transition();
    }
    setTransitioning(false);
  }, [animate, path, scope, transitioning]);

  const transition = async (href: string, title: string) => {
    if (path == href) return;

    setTransitioning(true);
    setTitle(title);

    await animate(scope.current, { zIndex: 10 });
    await animate("#bgtransition", { opacity: 1 }, { duration: 0.5 });
    await animate("#title", { opacity: 1 }, { duration: 0.5 });
    router.push(href);
  };

  const value = {
    transition,
  };

  return (
    <TransitionContext.Provider value={value}>
      <div className="fixed -z-10 bg-white" ref={scope}>
        <div
          id="bgtransition"
          className="fixed z-10 h-screen w-screen bg-primary-700 opacity-0"
        />
        <div
          id="title"
          className="fixed flex h-screen w-screen items-center justify-center px-4 text-center text-white opacity-0"
        >
          {title}
        </div>
      </div>
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
