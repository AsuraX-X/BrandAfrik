"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect } from "react";

const Header = () => {
  return (
    <div className="fixed top-0 w-screen z-10 h-13 flex items-center">
      <div className="flex flex-1 shrink-0 justify-center items-center">
        <Image
          src="/logo.svg"
          unoptimized
          alt="brand name"
          width={90}
          height={90}
        />
      </div>
      <div className="flex flex-1 gap-4 justify-center h-full">
        <motion.button
          whileHover={{
            borderTopWidth: "2px",
            height: "50px",
            borderColor: "#ffffff",
          }}
          transition={{ ease: "linear", duration: 0.05 }}
          className="w-25"
        >
          Our Services
        </motion.button>
        <motion.button
          whileHover={{
            borderTopWidth: "2px",
            height: "50px",
            borderColor: "#ffffff",
          }}
          transition={{ ease: "linear", duration: 0.05 }}
          className="w-25"
        >
          Our Work
        </motion.button>
        <motion.button
          whileHover={{
            borderTopWidth: "2px",
            height: "50px",
            borderColor: "#ffffff",
          }}
          transition={{ ease: "linear", duration: 0.05 }}
          className="w-25"
        >
          About
        </motion.button>
      </div>
      <div className="flex flex-1 shrink-0 justify-center items-center">
        <p>Get in touch</p>
      </div>
    </div>
  );
};

export default Header;
