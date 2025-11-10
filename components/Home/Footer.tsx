import React from "react";
import Image from "next/image";
import GetInTouchBtn from "../General/GetInTouchBtn";
import Background from "../General/Background";

const Footer = () => {
  return (
    <div>
      <section className="mt-80 flex flex-col lg:flex-row lg:items-center py-10 lg:py-0 px-4 lg:px-10 justify-between bg-black bg-[url(/bba.svg)] h-[240px] max-w-6xl mx-auto w-full">
        <p className="lg:text-6xl text-4xl font-light max-w-2xl">
          Ready to turn your idea into a tool for change?
        </p>
        <GetInTouchBtn />
      </section>
      <section className="mt-40 relative">
        <Background direction="t" />
        <div className="h-screen flex items-end">
          <Image
            src={"/ba.svg"}
            alt="Brand Afrik"
            width={0}
            height={0}
            className="w-full"
          />
        </div>{" "}
      </section>
    </div>
  );
};

export default Footer;
