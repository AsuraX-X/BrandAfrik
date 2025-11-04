"use client";

import React, { useEffect, useState } from "react";

const Why = () => {
  const whys = [
    {
      title: "Innovation First",
      icon: "ri-lightbulb-flash-fill",
      bg: "bg-[#5D01F1]",
      desc: "We breathe innovation. Our team of visionary thinkers and tech enthusiasts thrives on pushing boundaries, embracing the latest trends, and staying ahead of the curve.",
    },
    {
      title: "Design Magic",
      icon: "ri-sparkling-fill",
      bg: "bg-[#E81686]",
      desc: "We don't just create websites and apps; we craft digital experiences that are as stunning as they are user-friendly. Your product deserves nothing less than pixel-perfect design.",
    },
    {
      title: "Tech Pioneers",
      icon: "ri-aliens-fill",
      bg: "bg-[#109F5A]",
      desc: "We are the tech geeks who live and breathe code. From web development to app creation, we have the expertise to turn your concept into a technological masterpiece.",
    },
    {
      title: "Startup Savvy",
      icon: "ri-timer-flash-fill",
      bg: "bg-[#E59042]",
      desc: "We understand the challenges that start-ups face. Our agile approach, cost-effective solutions, and start-up friendly mindset ensure you get maximum value for your investment.",
    },
    {
      title: "Global Reach",
      icon: "ri-globe-fill",
      bg: "bg-[#5AB8FA]",
      desc: "Whether you're launching your venture locally or aiming for global domination, we've got you covered. Our projects span the globe, connecting businesses with their audiences worldwide.",
    },
    {
      title: "Your Success, Our Mission",
      icon: "ri-trophy-fill",
      bg: "bg-[#F2B401]",
      desc: "Your success is our driving force. We're not just building websites and apps; we're building your success story.",
    },
  ];

  // responsive baseTop: use larger top spacing on small screens
  const [baseTop, setBaseTop] = useState<number>(120);
  const gap = 72; // px between stacked headers

  useEffect(() => {
    const calc = () => {
      // Tailwind 'sm' breakpoint is 640px — consider below that as mobile
      const isMobile = window.innerWidth < 640;
      setBaseTop(isMobile ? 200 : 120);
    };

    // initial
    calc();

    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // compute top positions once so we don't calculate inside JSX
  const whysWithTop = whys.map((item, i) => ({
    ...item,
    top: `${baseTop + gap * i}px`,
  }));

  return (
    <div className="flex flex-col sm:flex-row gap-4 h-[65rem] text-sm/tight max-w-6xl mx-auto  ">
      <p className="text-[44px] sticky top-20  sm:mb-4 sm:top-30 h-fit mb-20 font-bold w-full">
        Why Choose BrandAfrik?
      </p>
      <div className="flex flex-col gap-20 w-full">
        {whysWithTop.map((item) => (
          <div
            key={item.title}
            style={{ top: item.top }}
            className={`h-18 w-full sticky flex items-center ${item.bg}`}
          >
            <h1 className="text-2xl px-4 flex gap-2">
              <i className={item.icon} />
              {item.title}
            </h1>
            <p className="absolute bg-[#1a1a1a] px-4 top-[100%] pt-2 h-20">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
