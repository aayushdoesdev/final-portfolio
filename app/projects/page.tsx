"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Project1 from "@/public/Project-1.png";
import Project2 from "@/public/Project-2.png";
import Project3 from "@/public/Project-3.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-[90vh] md:h-[120vh] lg:h-[90vh]">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-center mt-8">
        Projects
      </h1>

      <div className="flex flex-col lg:flex-row lg:space-x-28 px-4 md:px-8 lg:px-64 lg:flex-wrap lg:ml-28">
        {/* PROJECT 1 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] md:w-[30rem] h-[28rem] rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Hilink Travel App
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              A website to deal with all your travel problem so you can enjoy
              your time to its fullest!
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={Project1}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-6">
              <Link
                legacyBehavior
                href="https://hilink-travel-app-rose.vercel.app/"
              >
                <a target="_blank">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Visit
                  </CardItem>
                </a>
              </Link>
            </div>
          </CardBody>
        </CardContainer>

        {/* PROJECT 2 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] md:w-[30rem] h-[28rem] rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Dropbox-Clone
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              An app made for the users to upload and secure there files in the
              cloud.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={Project2}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-6">
              <Link
                legacyBehavior
                href="https://graceful-palmier-bcdab8.netlify.app/"
              >
                <a target="_blank">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Visit
                  </CardItem>
                </a>
              </Link>
            </div>
          </CardBody>
        </CardContainer>

        {/* PROJECT 3 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] md:w-[30rem] h-[28rem] rounded-xl p-6 border lg:ml-44 ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Knight Website Analytics
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Knight offers there user to efficiently and in real time review
              there commercial websites and get deep insights.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={Project3}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-6">
              <Link legacyBehavior href="https://knight-ui-ux.vercel.app/">
                <a target="_blank">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Visit
                  </CardItem>
                </a>
              </Link>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default page;
