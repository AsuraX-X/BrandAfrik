"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import ContactForm from "./ContactForm";

const GetInTouchBtn = () => {
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const buttonText = "Get in touch";
  const chars = buttonText.split("");

  return (
    <div>
      <motion.button
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        onClick={() => setIsOpen(true)}
        className="flex gap-2 justify-center items-center cursor-pointer"
        style={{ flexDirection: hover ? "row-reverse" : "row" }}
      >
        <motion.div layout>
          <Image
            src="/GetInTouch.svg"
            unoptimized
            alt="get in touch button"
            width={20}
            height={20}
          />
        </motion.div>
        <motion.p layout>
          {chars.map((char, i) => (
            <motion.span
              animate={{ opacity: hover ? [1, 0, 1] : 1 }}
              transition={{
                delay: i * 0.05,
                duration: 0.2,
                repeat: hover ? Infinity : 0,
                repeatDelay: hover ? 4 : 0,
              }}
              key={i}
              className="font-bold text-[20px]"
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed flex z-100 justify-end inset-0 backdrop-blur-2xl"
          >
            <ContactForm onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GetInTouchBtn;
