import Image from "next/image";
import logo from "@/public/logos//main.svg";
import TransitionLink from "./TransitionLink";

const Footer = () => {
  return (
    <div
      className="relative h-[80vh] min-h-[400px] bg-neutral-600"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 flex h-[300px] w-full flex-col justify-end gap-4 p-4 text-neutral-800">
        he
      </div>
      <div className="absolute top-0 h-28 w-full rounded-b-3xl bg-neutral-900" />        
    </div>
  );
};

export default Footer;