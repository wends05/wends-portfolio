import { createContext, ReactNode } from "react";

const TransitonContext = createContext({});

const TransitionProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TransitonContext.Provider value={{}}>{children}</TransitonContext.Provider>
  );
};

export default TransitionProvider;
