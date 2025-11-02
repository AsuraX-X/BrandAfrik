"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const Yap = () => {
  const text1 =
    "Every idea we pursue starts with a question: How can we make life better?";
  const text2 = "We listen, we learn, and we design with purpose.";
  const text3 =
    "We blend traditional knowledge with modern tools, taking the ingenuity of local communities and amplifying it with the power of emerging technologies.";

  const words1 = text1.split(" ");
  const words2 = text2.split(" ");
  const words3 = text3.split(" ");

  const allWords = words1.concat(words2.concat(words3));

  console.log(allWords);

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

  return (
    <div className="flex flex-col justify-center items-center text-6xl/18 font-bold">
      <p className="py-10" ref={yapRef}>
        {allWords.map((word, i) => {
          const start = i / allWords.length;
          const end = start + 1 / allWords.length;

          // Extend the fade range for smoother transitions
          const fadeStart = Math.max(0, start - 0.1); // Start fading earlier
          const fadeEnd = Math.min(1, end + 0.2); // End fading later
          const opacity = useTransform(p, [fadeStart, fadeEnd], [0, 1]);

          return (
            <motion.span key={i} style={{ opacity }}>
              {word}{" "}
              {(i === words1.length - 1 ||
                i === words1.length + allWords.length - 1) && (
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
