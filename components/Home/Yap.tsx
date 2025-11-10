"use client";

import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import { useRef, useState } from "react";

const Yap = () => {
  const text1 =
    "Every idea we pursue starts with a question: How can we make life better?";
  const text2 = "We listen, we learn, and we design with purpose.";
  const text3 =
    "We blend traditional knowledge with modern tools, taking the ingenuity of local communities and amplifying it with the power of emerging technologies.";

  const words1 = text1.split(" ");
  const words2 = text2.split(" ");
  const words3 = text3.split(" ");

  const allWords = words1.concat(words2).concat(words3);

  const yapRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: yapRef,
    offset: ["start end", "end 0.25"],
  });

  const p = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    mass: 0.5,
  });

  // Use state to hold per-word opacities and update them from the motion
  // value `p` via a motion event handler. This avoids calling hooks inside
  // a loop and satisfies the rules-of-hooks.
  const [opacities, setOpacities] = useState<number[]>(() =>
    new Array(allWords.length).fill(0)
  );

  useMotionValueEvent(p, "change", (v: number) => {
    const next = allWords.map((_, i) => {
      const start = i / allWords.length;
      const end = start + 1 / allWords.length;

      const fadeStart = Math.max(0, start - 0.1);
      const fadeEnd = Math.min(1, end + 0.2);

      if (v <= fadeStart) return 0;
      if (v >= fadeEnd) return 1;
      return (v - fadeStart) / (fadeEnd - fadeStart);
    });
    setOpacities(next);
  });

  return (
    <div className="flex sm:px-35 px-6 flex-col justify-center items-center sm:text-6xl/18 text-3xl font-bold">
      <p className="py-10" ref={yapRef}>
        {allWords.map((word, i) => {
          const opacity = opacities[i];

          // Insert paragraph breaks after text1 and text2
          const insertBreak =
            i === words1.length - 1 || i === words1.length + words2.length - 1;

          return (
            <motion.span key={i} style={{ opacity }}>
              {word}{" "}
              {insertBreak && (
                <span>
                  <br />
                  <br />
                </span>
              )}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
};

export default Yap;
