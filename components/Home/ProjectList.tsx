import React from "react";

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
  return (
    <div className="border-b-[#A3A3A3] border-b-1 py-4">
      <h1 className="text-3xl mb-1">{header}</h1>
      <div className="flex items-center text-[#A3A3A3]">
        <p className="flex-1">{subtitle1}</p>
        <p className="flex-1">{subtitle2}</p>
        <p >{year}</p>
      </div>
    </div>
  );
};

export default ProjectList;
