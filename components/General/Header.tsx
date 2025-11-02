"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import GetInTouchBtn from "./GetInTouchBtn";

const Header = () => {


  return (
    <div className="fixed top-0 w-screen z-10 h-15 flex items-center">
      <div className="flex flex-1 shrink-0 justify-center items-center h-full">
        <Image
          src="/logo.svg"
          unoptimized
          alt="brand name"
          width={82}
          height={82}
        />
      </div>
      <div className="flex flex-1 gap-4 justify-center h-full">
        <motion.button
          whileHover={{
            borderTopWidth: "2px",
            height: "58px",
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
            height: "58px",
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
            height: "58px",
            borderColor: "#ffffff",
          }}
          transition={{ ease: "linear", duration: 0.05 }}
          className="w-25"
        >
          About
        </motion.button>
      </div>
      <div className="flex flex-1 shrink-0 justify-center items-center ">
        <GetInTouchBtn />
      </div>
    </div>
  );
};

export default Header;
