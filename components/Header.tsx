"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const button = document.getElementById("GET");

    button?.addEventListener("mouseenter", () => setHover(true));
    button?.addEventListener("mouseleave", () => setHover(false));

    return () => {
      button?.removeEventListener("mouseenter", () => setHover(true));
      button?.removeEventListener("mouseleave", () => setHover(false));
    };
  }, []);

  const buttonText = "Get in touch";
  const chars = buttonText.split("");

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
        <button id="GET" className="flex gap-2 justify-center items-center">
          <motion.div animate={{ x: hover ? 98 : 0 }}>
            <Image
              src="/GetInTouch.svg"
              unoptimized
              alt="get in touch button"
              width={20}
              height={20}
            />
          </motion.div>
          <motion.p animate={{ x: hover ? -27 : 0 }}>
            {chars.map((char, i) => (
              <motion.span
                animate={{ opacity: hover ? [1, 0, 1] : 1 }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.2,
                  repeat: hover ? Infinity : 0,
                  repeatDelay: hover ? 1 : 0,
                }}
                key={i}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </button>
      </div>
    </div>
  );
};

export default Header;
