import Link from "next/link";
import Navlink from "./Navlink";

const items = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="border border-neutral-400 h-12 w-[450px] m-auto mt-5 rounded-lg lg:h-16 lg:w-[800px] sticky top-5 bg-black z-20">
      <div className="">
        <ul className="flex justify-around items-center h-12 font-bold text-lg cursor-pointer lg:text-2xl lg:h-16">
          {items.map((item) => (
            <li className="hover:bg-neutral-300 hover:text-black transition ease rounded-md py-1">
              <Navlink link={item} key={item.title}/>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
