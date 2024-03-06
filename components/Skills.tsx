import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";


const icons = [
    {
        item: <IoLogoJavascript/>,
        name: "Javascript"
    },
    {
        item: <FaHtml5/>,
        name: "Html"
    },
    {
        item: <FaCss3Alt/>,
        name: "Css"
    },
    {
        item: <FaReact />,
        name: "React"
    },
    {
        item: <SiNextdotjs />,
        name: "NextJs"
    },
    {
        item: <SiTailwindcss />,
        name: "Tailwind"
    },
    {
        item: <DiMongodb />,
        name: "MongoDB"
    },
    {
        item: <IoLogoFirebase />,
        name: "Firebase"
    },
    {
        item: <FaGithub />,
        name: "Github"
    },
    {
        item: <FaGitAlt />,
        name: "Git"
    },
    

]

const Skills = () => {
  return (
    <section className='px-4 md:px-8 lg:px-64'>
      <div >
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-center">Skills</h1>
        <p className='mt-8 text-lg md:text-xl lg:text-2xl text-neutral-300 text-center'>Improving my skills everyday in creating responsive, user-friendly and useful web applications. I bring ideas to life by creating interactive and highly responsive user interfaces. Leveraging the power of React, Nextjs, Nodejs and many other library to create scalable and maintainable applications.</p>
      </div>
      <div className="">
        <ul className="flex flex-wrap space-x-8 mt-8 justify-around">
           {icons.map((icon) => (
            <li className="space-y-2 px-4 py-8 flex flex-col justify-center ">
                <div className="text-5xl md:text-6xl lg:text-8xl cursor-pointer">{icon.item}</div>
                <div className="text-center">{icon.name}</div>
            </li>
           ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
