"use client";
import React from "react";
import Background from "../General/Background";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="relative h-screen  gap-8 px-4 sm:px-30 flex flex-col justify-center">
      <Background direction="b" />

      <motion.h1
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ ease: "linear" }}
        className="font-bold capitalize text-6xl md:text-8xl"
      >
        We are a team of dynamic innovators
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{
          delay: 0.2,
          ease: "linear",
        }}
        className="font-thin max-w-xl"
      >
        At BrandAfrik, we are not just developers, designers, strategists, we
        are a curated ensemble of creators driven by curiosity, collaboration,
        and craftsmanship. We&apos;re passionate about immersing ourselves fully and
        creating a significant impact.
      </motion.p>
    </div>
  );
};

export default Hero;
