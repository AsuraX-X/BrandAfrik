"use client";

import { motion } from "motion/react";
import GetInTouchBtn from "../General/GetInTouchBtn";
import Background from "../General/Background";

const HeroSection = () => {
  return (
    <section className="flex relative justify-center px-6 sm:px-35">
      <Background direction="b" />
      <div className="h-screen flex flex-col sm:items-center sm:justify-center justify-end overflow-hidden sm:max-w-270 gap-15 pb-10 sm:gap-6">
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold"
        >
          Turning bold ideas into everyday tools for change
        </motion.h1>
        <div className="flex font-thin sm:flex-row flex-col w-full gap-2">
          <motion.p
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="max-w-80"
          >
            We are mission-driven innovative people committed to building
            transformative solutions rooted in African-inspired ideologies and
            design thinking
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.5 }}
            className="max-w-80"
          >
            At the heart of our work is a belief that the continent&apos;s
            unique perspectives, challenges, and creative heritage hold the
            power to shape global progress
          </motion.p>
        </div>
        <div className="sm:hidden w-full">
          <GetInTouchBtn />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
