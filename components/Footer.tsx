import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="relative h-[90vh] min-h-125 bg-neutral-700"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 flex h-75 w-full flex-col justify-end gap-4 p-4">
        <h1 className="text-center">Wendell Terence Dador</h1>
        <h5 className="text-secondary-500 text-center">
          Aspiring Software Engineer
        </h5>
        <div className="pt-10">
          <p>cxnner05@gmail.com</p>
          <p>wendellterence.dador-23@cpu.edu.ph</p>
        </div>
        <div>
          <Link href={"https://github.com/wends05"}>
            <SiGithub />
          </Link>
        </div>
      </div>
      <div className="absolute top-0 h-28 w-full rounded-b-3xl bg-neutral-900" />
    </div>
  );
};

export default Footer;
