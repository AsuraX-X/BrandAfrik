"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";

const ExpandingContainers = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getWidth = (index: number) => {
    if (hoveredIndex === null) return "33.333%";
    if (hoveredIndex === index) return "60%";
    return "20%";
  };
  const getScale = (index: number) => {
    if (hoveredIndex === index) return 0.8;
    return 1;
  };

  return (
    <div>
      <div className="h-screen hidden md:flex justify-between">
        <motion.div
          onHoverStart={() => setHoveredIndex(0)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={{ width: getWidth(0) }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          className="flex items-center justify-center h-full flex-col bg-[#DB4437] relative"
        >
          <motion.div
            animate={{
              scale: getScale(0),
              x: hoveredIndex === 0 ? -240 : 0,
              y: hoveredIndex === 0 ? -240 : 0,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="will-change-transform"
          >
            <Image
              src="/logoDev.svg"
              width={200}
              height={200}
              alt="Brand Afrik Developoers"
            />
          </motion.div>
          <AnimatePresence>
            {hoveredIndex === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0, transition: { delay: 0 } }}
                transition={{ delay: 0.2 }}
                className="flex flex-col absolute pointer-events-none px-4"
              >
                <p className="max-w-160 mt-10 text-2xl lg:text-4xl">
                  We partner with your team to design and build custom digital
                  solutions that streamline operations and drive results.
                </p>
                <p className="max-w-160 mt-5">
                  Using a collaborative design thinking approach, we craft tools
                  tailored to your brand; making your business smarter, faster,
                  and more efficient.
                </p>
                <div className=" flex max-w-120 mt-10 justify-between">
                  <p>Services</p>
                  <p className="text-base/loose">
                    Web App Development
                    <br />
                    Mobile App Development
                    <br />
                    Custom Software Solutions
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          onHoverStart={() => setHoveredIndex(1)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={{ width: getWidth(1) }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          className="flex items-center justify-center h-full flex-col bg-[#F2B401] relative"
        >
          <motion.div
            animate={{
              scale: getScale(1),
              x: hoveredIndex === 1 ? -240 : 0,
              y: hoveredIndex === 1 ? -240 : 0,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="will-change-transform"
          >
            <Image
              src="/logoCre.svg"
              width={200}
              height={200}
              alt="Brand Afrik Creatives"
            />
          </motion.div>
          <AnimatePresence>
            {hoveredIndex === 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0, transition: { delay: 0 } }}
                transition={{ delay: 0.2 }}
                className="flex flex-col absolute p-4 pointer-events-none text-[#353535]"
              >
                <p className="max-w-160 mt-10 text-2xl lg:text-4xl">
                  Our creative team works hand-in-hand with yours to craft bold,
                  market-ready brands and products.
                </p>
                <p className="max-w-160 mt-5">
                  Using top-tier tools and a collaborative creative process, we
                  shape every detail to meet your vision and exceed
                  expectations.
                </p>
                <div className=" flex max-w-120 mt-10 justify-between">
                  <p>Services</p>
                  <p className="text-base/loose">
                    Brand Design
                    <br />
                    Product Design
                    <br />
                    Modelling and Rendering
                    <br />
                    Photography and Video Production
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          onHoverStart={() => setHoveredIndex(2)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={{ width: getWidth(2) }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          className="flex items-center justify-center h-full flex-col bg-[#109E5A]"
        >
          <motion.div
            animate={{
              scale: getScale(2),
              x: hoveredIndex === 2 ? -240 : 0,
              y: hoveredIndex === 2 ? -240 : 0,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="will-change-transform"
          >
            <Image
              src="/logoGrow.svg"
              width={200}
              height={200}
              alt="Brand Afrik Grow"
            />
          </motion.div>
          <AnimatePresence>
            {hoveredIndex === 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0, transition: { delay: 0 } }}
                transition={{ delay: 0.2 }}
                className="flex flex-col absolute pointer-events-none px-4"
              >
                <p className="max-w-160 mt-10 text-2xl lg:text-4xl">
                  We partner with your team to design and build custom digital
                  solutions that streamline operations and drive results.
                </p>
                <p className="max-w-160 mt-5">
                  Using a collaborative design thinking approach, we craft tools
                  tailored to your brand; making your business smarter, faster,
                  and more efficient.
                </p>
                <div className=" flex max-w-120 mt-10 justify-between">
                  <p>Services</p>
                  <p className="text-base/loose">
                    Web App Development
                    <br />
                    Mobile App Development
                    <br />
                    Custom Software Solutions
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="md:hidden block">
        <div className="flex px-4 py-20 items-center justify-between h-[655px] flex-col bg-[#DB4437]">
          <div className="w-full">
            <Image
              src="/logoDev.svg"
              width={0}
              height={0}
              className="size-30"
              alt="Brand Afrik Developoers"
            />
          </div>
          <div className="font-thin">
            <p className="mt-10 text-2xl">
              We partner with your team to design and build custom digital
              solutions that streamline operations and drive results.
            </p>
            <p className="max-w-160 mt-5">
              Using a collaborative design thinking approach, we craft tools
              tailored to your brand; making your business smarter, faster, and
              more efficient.
            </p>
          </div>
          <div className="w-full">
            <p className="font-thin mb-6">SERVICES</p>
            <p className="text-base/10">
              Web App Development
              <br />
              Mobile App Development
              <br />
              Custom Software Solutions
            </p>
          </div>
        </div>
        <div className="flex px-4 py-20 items-center text-[#353535] justify-between h-[655px] flex-col bg-[#F2B401]">
          <div className="w-full">
            <Image
              src="/logoCre.svg"
              width={0}
              height={0}
              className="size-30"
              alt="Brand Afrik Creatives"
            />
          </div>
          <div className="font-thin">
            <p className="mt-10 text-2xl">
              Our creative team works hand-in-hand with yours to craft bold,
              market-ready brands and products.
            </p>
            <p className="max-w-160 mt-5">
              Using top-tier tools and a collaborative creative process, we
              shape every detail to meet your vision and exceed expectations.
            </p>
          </div>
          <div className="w-full">
            <p className="font-thin mb-6">SERVICES</p>
            <p className="text-base/10">
              Brand Design
              <br />
              Product Design
              <br />
              Modelling and Rendering
              <br />
              Photography and Video Production
            </p>
          </div>
        </div>
        <div className="flex px-4 py-20 items-center justify-between h-[655px] flex-col bg-[#109E5A]">
          <div className="w-full">
            <Image
              src="/logoGrow.svg"
              width={0}
              height={0}
              className="size-30"
              alt="Brand Afrik Grow"
            />
          </div>
          <div className="font-thin">
            <p className="mt-10 text-2xl">
              We partner with your team to design and build custom digital
              solutions that streamline operations and drive results.
            </p>
            <p className="max-w-160 mt-5">
              Using a collaborative design thinking approach, we craft tools
              tailored to your brand; making your business smarter, faster, and
              more efficient.
            </p>
          </div>
          <div className="w-full">
            <p className="font-thin mb-6">SERVICES</p>
            <p className="text-base/10">
              Web App Development
              <br />
              Mobile App Development
              <br />
              Custom Software Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandingContainers;
