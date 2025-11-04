"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import GetInTouchBtn from "./GetInTouchBtn";
import GetInTouchBtnAlt from "./GetInTouchBtnAlt";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-10 h-15 ">
      <div className="sm:flex hidden items-center">
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
      <div className="sm:hidden flex items-center justify-end p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="text-3xl cursor-pointer"
        >
          <i className="ri-menu-5-line" />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 flex flex-col right-0 bg-[#1a1a1a] inset-0"
            >
              <div className="flex items-center justify-between text-4xl p-4">
                <Image
                  src="/logo.svg"
                  unoptimized
                  alt="brand name"
                  width={130}
                  height={130}
                />
                <button onClick={() => setIsOpen(false)}>
                  <i className="ri-close-circle-line ri-xl" />
                </button>
              </div>
              <div className="flex-1 text-[40px] mt-40">
                <ul className="h-full flex flex-col justify-between p-4">
                  <li className="h-full flex items-center p-4">Home</li>
                  <li className="h-full flex items-center p-4">Services</li>
                  <li className="h-full flex items-center p-4">Our Work</li>
                  <li className="h-full flex items-center p-4">About</li>
                  <li className="h-full flex items-center p-6 bg-white">
                    <GetInTouchBtnAlt />
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
