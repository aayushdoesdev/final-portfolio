import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

// const links = [
//   {
//     name: "Gmail",
//     icon: <BiLogoGmail />,
//     path: "123",
//     colors: "-red-500",
//   },
//   {
//     name: "Twitter",
//     icon: <FaXTwitter />,
//     path: "https://twitter.com/aayushdoesdev",
//     colors: "-blue-800",
//   },
//   {
//     name: "Github",
//     icon: <FaGithub />,
//     path: "https://github.com/aayushdoesdev",
//   },
//   {
//     name: "Linkedin",
//     icon: <FaLinkedin />,
//     path: "https://www.linkedin.com/in/aayush-vaishnav-5139b32ab/",
//     colors: "-blue-800",
//   },
// ];

const page = () => {
  return (
    <>
      <section>
        <div className="">
          <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex-col items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]"></div>
            <h1 className="font-bold text-5xl text-center mt-14">Contact</h1>
            <div className="">
              <ul className="flex flex-col mt-12 space-y-8">
                {/* {links.map((link) => (
            <li className="flex justify-center items-center border border-neutral-300 rounded-md w-[40vh] m-auto py-4 gap-3">
              <div className={`text-4xl text${link.colors}`}>{link.icon}</div>
              <Link href={link.path}><div className={`text-3xl font-semibold`}>{link.name}</div></Link>
            </li>
          ))} */}

                <li className="flex justify-center items-center border border-neutral-300 rounded-md w-[40vh] m-auto py-4 gap-3 hover:border-neutral-600 transition ease cursor-pointer">
                  <Link
                    href={"https://twitter.com/aayushdoesdev"}
                    
                    legacyBehavior
                  >
                    <a target="_blank" className="flex gap-4 items-center">
                      <div className={`text-4xl`}>
                        <FaXTwitter />
                      </div>
                      <div className={`text-3xl font-semibold`}>Twitter</div>
                      <div className="mt-2">
                        <FaArrowUpRightFromSquare />
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="flex justify-center items-center border border-neutral-300 rounded-md w-[40vh] m-auto py-4 gap-3 hover:border-neutral-600 transition ease cursor-pointer">
                  <Link
                    href={"https://github.com/aayushdoesdev"}
                    
                    legacyBehavior
                  >
                    <a target="_blank" className="flex gap-4 items-center">
                      <div className={`text-4xl text`}>
                        <FaGithub />
                      </div>
                      <div className={`text-3xl font-semibold`}>Github</div>
                      <div className="mt-2">
                        <FaArrowUpRightFromSquare />
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="flex justify-center items-center border border-neutral-300 rounded-md w-[40vh] m-auto py-4 gap-3 hover:border-neutral-600 transition ease cursor-pointer">
                  <Link
                    href={
                      "https://www.linkedin.com/in/aayush-vaishnav-5139b32ab/"
                    }
                    
                    legacyBehavior
                  >
                    <a target="_blank" className="flex gap-4 items-center flex-row">
                      <div className={`text-4xl text-blue-400`}>
                        <FaLinkedin />
                      </div>
                      <div className={`text-3xl font-semibold`}>Linkedin</div>
                      <div className="mt-2">
                        <FaArrowUpRightFromSquare />
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="flex justify-center items-center border border-neutral-300 rounded-md w-[40vh] m-auto py-4 gap-3 hover:border-neutral-600 transition ease cursor-pointer">
                  <Link href={"/"} className="flex gap-4 items-center">
                    <div className={`text-4xl text-red-600`}>
                      <BiLogoGmail />
                    </div>
                    <div className={`text-md font-semibold`}>
                      aayushdoesdev@gmail.com
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <BackgroundBeams /> */}
    </>
  );
};

export default page;
