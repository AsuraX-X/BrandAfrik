"use client";
import React, { useRef, useState } from "react";
import Background2 from "../General/Background2";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Image from "next/image";

const We = () => {
  const weRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: weRef });
  const [y, setY] = useState("0");
  const [iY, setIY] = useState("-66.667%");
  const [x, setX] = useState("0");
  const [iX, setIX] = useState("-66.667%");
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndexRef = useRef(0);
  const [prevDir, setPrevDir] = useState(1);

  const images = ["/strategize.svg", "/design.svg", "/develop.svg"];
  const titles = ["Strategize", "Design", "Develop"];
  const subtitles = [
    ["Brand Strategy", "Digital Strategy"],
    ["Brand Design", "Product Design"],
    ["Websites", "Custom Software"],
  ];

  useMotionValueEvent(scrollYProgress, "change", (i) => {
    // desktop vertical offsets (keep existing behavior)
    if (i < 1 / 3) {
      setY("0");
      setIY("-66.667%");
    } else if (i < 2 / 3) {
      setY("-33.333%");
      setIY("-33.333%");
    } else if (i > 2 / 3) {
      setY("-66.667%");
      setIY("0");
    }

    if (i < 1 / 3) {
      setX("0");
      setIX("-66.667%");
    } else if (i < 2 / 3) {
      setX("-100%");
      setIX("-33.333%");
    } else if (i > 2 / 3) {
      setX("-200%");
      setIX("0");
    }
  });

  return (
    <div ref={weRef} className="relative max-w-screen h-[600vh]">
      <div className="hidden md:flex h-screen sticky top-0 text-8xl justify-center items-center font-bold gap-6">
        <p>We</p>
        <div className="overflow-hidden h-screen">
          <motion.div
            animate={{ y: iY }}
            className="flex justify-between flex-col"
          >
            <div className="h-screen flex justify-start items-center gap-6">
              <Image src="/develop.svg" alt="We" height={96} width={96} />
            </div>
            <div className="h-screen flex justify-start items-center gap-6">
              <Image src="/design.svg" alt="We" height={96} width={96} />
            </div>
            <div className="h-screen flex justify-start items-center gap-6">
              <Image src="/strategize.svg" alt="We" height={96} width={96} />
            </div>
          </motion.div>
        </div>
        <div className="overflow-hidden h-screen">
          <motion.div animate={{ y }} className="flex justify-between flex-col">
            <div className="h-screen flex justify-start items-center gap-6">
              <p className="flex flex-col mt-12">
                Strategize
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm font-normal"
                >
                  Brand Strategy
                </motion.span>
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm font-normal"
                >
                  Digital Strategy
                </motion.span>
              </p>
            </div>
            <div className="h-screen flex justify-start items-center gap-6">
              <p className="flex flex-col mt-12">
                Design
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm font-normal"
                >
                  Brand Design
                </motion.span>
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm font-normal"
                >
                  Product Design
                </motion.span>
              </p>
            </div>
            <div className="h-screen flex justify-start items-center gap-6">
              <p className="flex flex-col mt-12">
                Develop
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm font-normal"
                >
                  Websites
                </motion.span>
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm font-normal"
                >
                  Custom Software
                </motion.span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="md:hidden flex  flex-col h-screen w-screen justify-center overflow-hidden sticky gap-2 top-0 text-5xl font-bold">
        <p className="text-center">We</p>
        <div>
          <motion.div
            initial={{ x: "-200%" }}
            animate={{ x: iX }}
            className="grid grid-cols-3 w-[300vw] "
          >
            <div className="min-w-screen flex items-center justify-center">
              <Image src="/develop.svg" alt="We" height={60} width={60} />
            </div>
            <div className="min-w-screen flex items-center justify-center">
              <Image src="/design.svg" alt="We" height={60} width={60} />
            </div>
            <div className="min-w-screen flex items-center justify-center">
              <Image src="/strategize.svg" alt="We" height={60} width={60} />
            </div>
          </motion.div>
        </div>
        <div className=" ">
          <motion.div animate={{ x }} className="flex">
            <div className="min-w-screen relative flex flex-col items-center justify-center">
              <p className="flex flex-col ">Strategize </p>
              <div className="absolute top-full font-normal gap-2 pt-2 flex flex-col items-center justify-center z-100">
                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm text-nowrap"
                >
                  Brand Strategy
                </motion.p>
                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-nowrap"
                >
                  Digital Strategy
                </motion.p>
              </div>
            </div>
            <div className="min-w-screen flex items-center justify-center">
              <p className="flex flex-col ">Design </p>
              <div className="absolute top-full font-normal gap-2 pt-2 flex flex-col items-center justify-center z-100">
                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm text-nowrap"
                >
                  Brand Design
                </motion.p>
                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-nowrap"
                >
                  Product Design
                </motion.p>
              </div>
            </div>
            <div className="min-w-screen flex items-center justify-center">
              <p className="flex flex-col ">Develop </p>

              <div className="absolute top-full font-normal gap-2 pt-2 flex flex-col items-center justify-center z-100">
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm text-nowrap"
                >
                  Websites
                </motion.span>
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-nowrap"
                >
                  Custom Software
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Background2 />
    </div>
  );
};

export default We;
