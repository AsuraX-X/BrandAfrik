"use client";
import React, { useRef, useState } from "react";
import Background2 from "../General/Background2";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";

const We = () => {
  const weRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: weRef });
  const [y, setY] = useState("0");
  const [iY, setIY] = useState("-66.667%");

  useMotionValueEvent(scrollYProgress, "change", (i) => {
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
    console.log(i);
  });

  return (
    <div ref={weRef} className="relative h-[600vh]">
      <div className="h-screen flex sticky top-0 text-8xl justify-center items-center font-bold gap-6">
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
      <Background2 />
    </div>
  );
};

export default We;
