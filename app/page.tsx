"use client";

import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import Link from "next/link";
import Image from "next/image";
import Profile from "@/public/Profile.jpg";

export default function Home() {
  const dev = useRef<HTMLDivElement>(null);
  const practical = useRef<HTMLDivElement>(null);
  const flexibility = useRef<HTMLDivElement>(null);
  const hireMe = useRef<HTMLDivElement>(null);
  const taught = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if dev.current is not null before using it
    // @ts-ignore
    const a1 = annotate(dev.current, {
      type: "bracket",
      color: "yellow",
      brackets: ["left", "right"],
      animationDuration: 1500, // Remove the quotes around 1200 to use it as a number
    });
    // @ts-ignore
    const a2 = annotate(practical.current, {
      type: "underline",
      color: "green",
      strokeWidth: "0.8",
      animationDuration: "1500",
    });
    // @ts-ignore
    const a3 = annotate(flexibility.current, {
      type: "box",
      color: "pink",
      strokeWidth: "0.8",
      animationDuration: "1500",
    });
    // @ts-ignore
    const a4 = annotate(hireMe.current, {
      type: "circle",
      color: "orange",
      strokeWidth: "0.8",
      animationDuration: "1500",
    });
    // @ts-ignore
    const a5 = annotate(taught.current, {
      type: "highlight",
      color: "red",
      strokeWidth: "0.3",
      animationDuration: "1500",
    });

    a1.show();
    a2.show();
    a3.show();
    a4.show();
    a5.show();
  }, []);

  return (
    <>
      <main className="">
        <div className="h-[80vh] lg:h-[95vh]">
          <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] "></div>
            <div className="mt-16 md:mt-[120px] px-4 md:px-8 lg:px-64 flex flex-wrap max-w-[150vh]">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Hello! I'm Aayush, a <span ref={dev}>developer</span> based in
                India.
              </h1>
              <p className="mt-8 text-lg md:text-xl lg:text-2xl text-neutral-300 mb-4">
                I love creating web applications that are user friendly, simple
                & beautiful. I am a{" "}
                <span ref={taught}>self taught full stack web developer</span>{" "}
                and i have spent 8 months learning the fundamentals of front-end
                & back-end. I have worked on some projects which are{" "}
                <span ref={practical}>
                  practical and has real life implimentations.{" "}
                </span>
              </p>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl text-neutral-300">
                Through them i have the experience of working in different types
                of applications and have{" "}
                <span ref={flexibility}>developed a working style</span> that
                leans towards, flexibility & clarity.
              </p>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl text-neutral-300 mb-4 lg:mt-8">
                <span ref={hireMe}>Hire me?</span>
              </p>
            </div>
            <button className=" text-black bg-neutral-300 px-4 py-2 ml-4 md:ml-8 lg:ml-64 mt-6 rounded-lg cursor-pointer hover:bg-neutral-500 transition ease lg:text-lg lg:font-semibold">
              <Link
                legacyBehavior
                href={
                  "https://drive.google.com/file/d/1Z6SKHb3723-laFPzv9_LB9niMDcLEjT9/view?usp=drive_link"
                }
              >
                <a target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Link>
            </button>
            {/* <div className="">
              <Image src={Profile} alt="pfp" width={100} height={100} />
            </div> */}
          </div>
        </div>

        <About />
        <Skills />
        <Footer />

        {/* <BackgroundBeams/> */}
      </main>
    </>
  );
}
