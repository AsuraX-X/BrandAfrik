"use client";

import { motion } from "motion/react";
import ProjectList from "./ProjectList";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="sm:px-35 px-6 mt-40">
      <h1 className="font-bold text-3xl mb-16 sm:mb-8">Our Projects</h1>
      <div className="flex flex-col ">
        <motion.div
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          className="border-b-[#A3A3A3] border-b-1 py-4 hidden sm:flex items-center"
        >
          <motion.div
            initial={{ width: 0, marginRight: 0 }}
            animate={{ width: hover ? 100 : 0, marginRight: hover ? 20 : 0 }}
          >
            <Image
              src="/codeIcon.svg"
              alt="Code Icon"
              width={100}
              height={40}
            />
          </motion.div>
          <div className="w-full">
            <h1 className="text-3xl mb-1">Code & Cocktails</h1>
            <div className="flex items-center text-[#A3A3A3]">
              <p className="flex-1">
                Bringing forward-thinking tech professionals together
              </p>
              <p className="flex-1">
                Brand Identity, Web Design, Web Development
              </p>
              <p>2023</p>
            </div>
          </div>
        </motion.div>
        <div className="sm:hidden block">
          <Image src="/codeIcon.svg" alt="Code Icon" width={100} height={40} />
          <ProjectList
            header="Code & Cocktails"
            subtitle1="Bringing forward-thinking tech professionals together"
            subtitle2="Brand Identity, Web Design, Web Development"
            year={2023}
          />
        </div>
        <ProjectList
          header="Sandra Scantlebury Foundation"
          subtitle1="Providing people of all ages basic but necessary medical help"
          subtitle2="Web Design, Web Development"
          year={2024}
        />
        <ProjectList
          header="Pr Prosper"
          subtitle1="A knowledge sharing community of young people"
          subtitle2="Brand Identity, Web Design, Web Development, Product Design"
          year={2020}
        />
        <ProjectList
          header="The Skill Club"
          subtitle1="Connecting talents to start-ups/companies"
          subtitle2="Brand Identity, Web Design"
          year={2020}
        />
      </div>
    </div>
  );
};

export default Projects;
