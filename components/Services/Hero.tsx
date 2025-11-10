import React from "react";
import Background from "../General/Background";

const Hero = () => {
  return (
    <section className="flex relative h-screen items-center justify-center pointer-events-none px-6 sm:px-35">
      <Background direction="b" />
      <h1 className=" text-5xl text-center md:text-6xl lg:text-8xl font-bold">We Connect The Dots</h1>
    </section>
  );
};

export default Hero;
