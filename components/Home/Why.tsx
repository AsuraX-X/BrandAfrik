"use client";

import React from "react";

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

  return (
    <div className="flex gap-4 h-[65rem] text-sm/tight max-w-6xl mx-auto  ">
      <p className="text-[44px] sticky top-30 h-fit font-bold w-full">
        Why Choose BrandAfrik?
      </p>
      <div className="flex flex-col gap-20 w-full">
        {whys.map((item, i) => (
          <div
            key={item.title}
            style={{ top: `${120 + 72 * i}px` }}
            className={`h-18 w-full sticky flex items-center px-4 ${item.bg}`}
          >
            <h1 className="text-2xl flex gap-2">
              <i className={item.icon} />
              {item.title}
            </h1>
            <p className="absolute bg-[#1a1a1a] top-[100%] pt-2 h-20">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
