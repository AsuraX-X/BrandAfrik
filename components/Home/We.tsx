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

    // set current index for mobile animations (0,1,2)
    const newIndex = Math.min(2, Math.floor(i * 3));
    const prev = prevIndexRef.current;
    const dir = newIndex > prev ? 1 : newIndex < prev ? -1 : prevDir;
    setPrevDir(dir);
    prevIndexRef.current = newIndex;
    setCurrentIndex(newIndex);
  });

  return (
    <div ref={weRef} className="relative h-[600vh]">
      <div className="hidden md:flex h-screen sticky top-0 text-8xl justify-center items-center font-bold gap-6">
        <p>We</p>
        <div className="overflow-hidden h-screen">
          <motion.div
            animate={{ y: iY }}
            className="flex justify-between flex-col"
          >
            <div className="h-screen flex justify-start items-center gap-6">
              <Image src="/develop.svg" alt="We" height={96} width={96} />{" "}
            </div>
            <div className="h-screen flex justify-start items-center gap-6">
              <Image src="/design.svg" alt="We" height={96} width={96} />{" "}
            </div>
            <div className="h-screen flex justify-start items-center gap-6">
              <Image src="/strategize.svg" alt="We" height={96} width={96} />{" "}
            </div>
          </motion.div>
        </div>
        <div className="overflow-hidden h-screen">
          <motion.div animate={{ y }} className="flex justify-between flex-col">
            <div className="h-screen flex justify-start items-center gap-6">
              <p className="flex flex-col mt-12">
                Strategize{" "}
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm font-normal"
                >
                  Brand Strategy
                </motion.span>{" "}
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm font-normal"
                >
                  Digital Strategy
                </motion.span>{" "}
              </p>
            </div>
            <div className="h-screen flex justify-start items-center gap-6">
              <p className="flex flex-col mt-12">
                Design{" "}
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm font-normal"
                >
                  Brand Design
                </motion.span>{" "}
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm font-normal"
                >
                  Product Design
                </motion.span>{" "}
              </p>
            </div>
            <div className="h-screen flex justify-start items-center gap-6">
              <p className="flex flex-col mt-12">
                Develop{" "}
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm font-normal"
                >
                  Websites
                </motion.span>{" "}
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm font-normal"
                >
                  Custom Software
                </motion.span>{" "}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="md:hidden min-h-screen sticky top-0 flex flex-col items-center justify-center gap-6 px-6">
        <p className="text-6xl font-bold">We</p>

        <div className="w-full flex items-center justify-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: prevDir * 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -prevDir * 100, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center justify-center"
            >
              <Image
                src={images[currentIndex]}
                alt="we"
                height={96}
                width={96}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full flex items-center justify-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ x: -prevDir * 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: prevDir * 100, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center justify-center"
            >
              <p className="flex flex-col text-6xl text-center">
                {titles[currentIndex]}
                <span className="text-sm font-normal mt-2">
                  {subtitles[currentIndex].join(" | ")}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Background2 />
    </div>
  );
};

export default We;
