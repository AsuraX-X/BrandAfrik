import React from "react";

const Dynamic = () => {
  const dynamics = [
    {
      text: "Programmers",
      icon: <i className="text-[#DB4437] ri-code-s-slash-line h-65 " />,
    },
    {
      text: "Product Designers",
      icon: <i className="text-[#F2B401]  ri-pen-nib-line h-65 " />,
    },
    {
      text: "Strategists",
      icon: <i className="text-[#109E5A]  ri-lightbulb-flash-line h-65 " />,
    },
    {
      text: "Brand Designers",
      icon: <i className="text-[#E81786]  ri-pencil-ruler-line h-65 " />,
    },
    {
      text: "UX Researchers",
      icon: <i className="text-[#5D01F2]  ri-pie-chart-line h-65 " />,
    },
    {
      text: "AI Engineers",
      icon: <i className="text-[#41E4E1]  ri-brain-ai-3-line h-65 " />,
    },
  ];

  return (
    <div className="px-4 sm:px-30">
      <h1 className=" text-3xl  sm:text-4xl md:text-6xl mb-10 max-w-xl">We are a team of dynamic innovators</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dynamics.map((dynamic, i) => (
          <div
            key={i}
            className="bg-black pt-4 px-4 flex flex-col justify-between aspect-square"
          >
            <p className="text-3xl lg:text-4xl">{dynamic.text}</p>
            <p className=" flex justify-end text-[182px]">{dynamic.icon}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dynamic;
