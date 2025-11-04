import React, { useEffect, useState } from "react";

const ProjectList = ({
  header,
  subtitle1,
  subtitle2,
  year,
}: {
  header: string;
  subtitle1: string;
  subtitle2: string;
  year: number;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = (ev: MediaQueryListEvent) => setIsMobile(ev.matches);

    setIsMobile(mq.matches);

    mq.addEventListener("change", handler);

    return () => {
      mq.removeEventListener("change", handler);
    };
  }, []);

  // On mobile, split subtitle2 by commas and join with a pipe separator, ensuring consistent spacing
  const renderedSubtitle2 = isMobile
    ? subtitle2
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .join(" | ")
    : subtitle2;

  return (
    <div className="border-b-[#A3A3A3] border-b-1 py-4">
      <h1 className="text-3xl mb-1">{header}</h1>
      <div className="flex sm:items-center flex-col sm:flex-row text-[#A3A3A3]">
        <p className="flex-1 text-xl sm:text-base font-thin">{subtitle1}</p>
        <p className="flex-1 font-thin text-sm">{renderedSubtitle2}</p>
        <p className="hidden sm:block">{year}</p>
      </div>
    </div>
  );
};

export default ProjectList;
