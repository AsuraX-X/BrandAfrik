"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import GetInTouchBtn from "./GetInTouchBtn";
import GetInTouchBtnAlt from "./GetInTouchBtnAlt";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div className="fixed top-0 w-full z-10 h-15 ">
      <div className="sm:flex hidden items-center">
        <div className="flex flex-1 shrink-0 justify-center items-center h-full">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              unoptimized
              alt="brand name"
              width={82}
              height={82}
            />
          </Link>
        </div>
        <div className="flex flex-1 gap-4 justify-center h-full">
          <Link href={"/services"}>
            <motion.button
              animate={{
                borderColor: pathname === "/services" ? "#ffffff" : "#1a1a1a00",
                borderTopWidth: pathname === "/services" ? 4 : 2,
                height: pathname === "/services" ? 58 : 60,
              }}
              whileHover={{
                borderColor: "#ffffff",
              }}
              transition={{
                ease: "linear",
                duration: 0.4,
                height: { duration: 0.1 },
                borderTopWidth: { duration: 0.1 },
              }}
              className="w-25 border-t-2 h-15 cursor-pointer"
            >
              Our Services
            </motion.button>
          </Link>
          <Link href={"/work"}>
            <motion.button
              animate={{
                borderColor: pathname === "/work" ? "#ffffff" : "#1a1a1a00",
                borderTopWidth: pathname === "/work" ? 4 : 2,
                height: pathname === "/work" ? 58 : 60,
              }}
              whileHover={{
                borderColor: "#ffffff",
              }}
              transition={{
                ease: "linear",
                duration: 0.4,
                height: { duration: 0.1 },
                borderTopWidth: { duration: 0.1 },
              }}
              className="w-25 border-t-2 h-15 cursor-pointer"
            >
              Our Work
            </motion.button>
          </Link>
          <Link href={"/about"}>
            <motion.button
              animate={{
                borderColor: pathname === "/about" ? "#ffffff" : "#1a1a1a00",
                borderTopWidth: pathname === "/about" ? 4 : 2,
                height: pathname === "/about" ? 58 : 60,
              }}
              whileHover={{
                borderColor: "#ffffff",
              }}
              transition={{
                ease: "linear",
                duration: 0.4,
                height: { duration: 0.1 },
                borderTopWidth: { duration: 0.1 },
              }}
              className="w-25 border-t-2 h-15 cursor-pointer"
            >
              About
            </motion.button>
          </Link>
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
                  <li className="h-full flex items-center p-4">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li className="h-full flex items-center p-4">
                    <Link href="/services" onClick={() => setIsOpen(false)}>
                      Services
                    </Link>
                  </li>
                  <li className="h-full flex items-center p-4">
                    <Link href="/work" onClick={() => setIsOpen(false)}>
                      Our Work
                    </Link>
                  </li>
                  <li className="h-full flex items-center p-4">
                    <Link href="/about" onClick={() => setIsOpen(false)}>
                      About
                    </Link>
                  </li>
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
