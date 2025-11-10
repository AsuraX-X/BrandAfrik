"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Behind = () => {
  const [client, setClient] = useState({ x: 0, y: 0 });
  const [h, setH] = useState(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ovlay = spotRef.current;
    if (!ovlay) return;

    const handleMouseMove = (e: MouseEvent) => {
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
      const rect = ovlay.getBoundingClientRect();
      setClient({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleScroll = () => {
      const rect = ovlay.getBoundingClientRect();
      setClient({
        x: lastMouseRef.current.x - rect.left,
        y: lastMouseRef.current.y - rect.top,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="px-4 sm:px-30 gap-8 items-center flex-col mb-20 lg:flex-row flex">
      <div className="relative min-h-120 h-full w-full">
        <motion.div
          ref={spotRef}
          onHoverStart={() => {
            setH(true);
            // Recalculate position on hover start if needed, but mouse move handles it
          }}
          onHoverEnd={() => setH(false)}
          whileHover={{ opacity: 1 }}
          style={{
            background: `radial-gradient(circle 120px at ${client.x}px ${client.y}px, transparent 0%, #1a1a1a)`,
          }}
          className="absolute z-1 spot inset-0 opacity-0"
        />
        <Image
          src="/people.png"
          alt=""
          fill
          unoptimized
          className="object-contain mask-radial-from-40% mask-radial-to-100% w-full h-full"
        />
        <motion.div
          animate={{ opacity: h ? 0 : 1 }}
          className="absolute inset-0 backdrop-blur-xs pointer-events-none mask-radial-from-transparent mask-radial-to-100% mask-radial-to-[#1a1a1a]"
        />
      </div>
      <div className="w-full font-thin space-y-6">
        <h1 className="text-6xl font-bold pb-8">Who’s Behind the Work</h1>
        <p>
          Our journey kicked off back in our college days, where a bunch of CS
          buddies got tired of dissecting algorithms and decided to cook up some
          real-world solutions. Enter BrandAfrik – the brainchild of our
          caffeine-fueled coding escapades. Together, we&apos;ve been the unsung
          heroes behind many projects, although, shhh, most of them are
          top-secret (thanks, NDAs!).
        </p>
        <p>
          We&apos;re a quirky bunch, and some of our alumni have gone on to
          conquer the tech world, fighting bugs and debugging codes at some of
          the biggest tech giants out there. We like to think of ourselves as a
          freelance studio, but really, we&apos;re just a group of
          problem-solvers, turning challenges into our daily dose of motivation.
        </p>
        <p>
          So, while we can&apos;t spill the beans on our covert operations,
          we&apos;re eagerly waiting for you to bring your ideas to our little
          corner of the digital universe. Let&apos;s make some tech magic
          together and be part of your story – the one with less code but way
          more heart!
        </p>
      </div>
    </div>
  );
};

export default Behind;
