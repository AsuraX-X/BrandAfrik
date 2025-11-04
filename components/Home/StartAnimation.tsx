"use client";

import { motion } from "motion/react";

const StartAnimation = () => {
  const slogan =
    "Rooted in Africa. Designed for the World. Powered by Innovation";
  const words = slogan.split(" ");
  console.log(words);

  const parent = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  const child = {
    hidden: {
      opacity: 0,
      y: 10,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div
      animate={{
        visibility: "hidden",
        opacity: 0,
      }}
      transition={{ delay: 1.8 }}
      className="fixed sas top-0 left-0 w-full h-full flex items-center justify-center bg-[#1a1a1a] pointer-events-none z-10"
    >
      <motion.p
        variants={parent}
        initial="hidden"
        animate="visible"
        className="text-2xl text-center px-4"
      >
        {words.map((word, i) => (
          <motion.span className="inline-block mr-2" variants={child} key={i}>
            {word}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
};

export default StartAnimation;
