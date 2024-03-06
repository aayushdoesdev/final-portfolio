import React from "react";


const items = [
  {
    emoji: "💻",
    name: "Full-Stack Development",
  },
  {
    emoji: "📈",
    name: "Real Life Projects",
  },
  {
    emoji: "🏍️",
    name: "Efficiency",
  },
  {
    emoji: "✏️",
    name: "Creative",
  },
];

const About = () => {
  return (
    <div className="h-[90vh] md:h-[120vh] lg:h-[90vh]">
      <div className="px-4 md:px-8 lg:px-64">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-center">
          About
        </h1>
        <p className="mt-8 text-lg md:text-xl lg:text-2xl text-neutral-300 text-center">
          I'm a versatile developer with a passion for crafting seamless digital
          experiences from both the front and backend perspectives. With a keen
          eye for design and a knack for problem-solving. Driven by curiosity
          and a relentless pursuit of excellence, I constantly seek to expand my
          skill set and stay abreast of emerging technologies.
        </p>
      </div>
      <div>
        <ul className="flex flex-col items-center gap-5 w-full mt-6 md:flex-row md:flex-wrap md:justify-center md:mt-16">
          {items.map((item) => (
            <li className="flex flex-col items-center text-lg md:text-2xl border border-neutral-300 py-2 px-4 gap-2 rounded-md min-w-[250px] md:w-[700px] md:h-[120px]">
              <div className="text-2xl md:text-4xl">{item.emoji}</div>
              <div className="font-bold">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default About;
