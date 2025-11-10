"use client";
import { animate } from "motion";
import { useInView, useMotionValue } from "motion/react";
import React, { useEffect, useRef } from "react";
import Background from "../General/Background";

const OurWork = () => {
  const num = useMotionValue(0);

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const target1 = 17;
    const target2 = 5;
    const target3 = 7;

    const controls = animate(num, 1, {
      delay: 0.2,
      duration: 2,
      onUpdate(latest) {
        const p1 = document.querySelector<HTMLParagraphElement>(".p1");
        const p2 = document.querySelector<HTMLParagraphElement>(".p2");
        const p3 = document.querySelector<HTMLParagraphElement>(".p3");

        if (p1) p1.innerText = Math.round(latest * target1).toString();
        if (p2) p2.innerText = Math.round(latest * target2).toString();
        if (p3) p3.innerText = Math.round(latest * target3).toString();
      },
    });

    return () => controls?.cancel?.();
  }, [isInView, num]);

  return (
    <div className="relative mx-auto px-4 sm:px-30">
      <Background direction="b" />

      <div className="flex flex-col justify-center h-[80vh]">
        <h1 className="text-8xl font-bold mb-20">Our Work</h1>
        <div
          ref={ref}
          className="flex flex-col sm:flex-row gap-12 justify-between"
        >
          <div className="flex flex-1 items-center gap-2">
            <p className="text-7xl font-bold p1">0</p>
            <p className="w-20 text-base/4">projects completed</p>
          </div>
          <div className="flex flex-1 items-center gap-2">
            <p className="text-7xl font-bold p2">0</p>
            <p className="w-20 text-base/4">sectors impacted</p>
          </div>
          <div className="flex flex-1 items-center gap-2">
            <p className="text-7xl font-bold p3">0</p>
            <p className="w-20 text-base/4">years making impact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
