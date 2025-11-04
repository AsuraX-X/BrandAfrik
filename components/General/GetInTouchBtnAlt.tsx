"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import ContactForm from "./ContactForm";

const GetInTouchBtnAlt = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(true)}
        className="flex w-full justify-between items-center cursor-pointer"
      >
          <p className="text-black">Get In Touch</p>
          <Image
            src="/GetInTouchAlt.svg"
            unoptimized
            alt="get in touch button"
            width={40}
            height={40}
          />
      </button>
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

export default GetInTouchBtnAlt;
