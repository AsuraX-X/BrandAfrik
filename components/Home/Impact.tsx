"use client";
import { animate } from "motion";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const Impact = () => {
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
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col justify-center h-[80vh]">
        <h1 className="text-3xl font-bold mb-30">Our Impact</h1>
        <div ref={ref} className="flex justify-between">
          <div className="flex flex-1 items-center">
            <p className="text-6xl font-bold p1">0</p>
            <p className="w-20 text-base/4">projects completed</p>
          </div>
          <div className="flex flex-1 items-center">
            <p className="text-6xl font-bold p2">0</p>
            <p className="w-20 text-base/4">sectors impacted</p>
          </div>
          <div className="flex flex-1 items-center">
            <p className="text-6xl font-bold p3">0</p>
            <p className="w-20 text-base/4">years making impact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
