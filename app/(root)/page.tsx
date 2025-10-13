import Background from "@/components/Background";
import HeroSection from "@/components/HeroSection";
import StartAnimation from "@/components/StartAnimation";
import React from "react";

const Home = () => {
  return (
    <div>
      <Background />
      <StartAnimation />
      <section className="flex mt-20 justify-center pointer-events-none">
        <HeroSection />
      </section>
    </div>
  );
};

export default Home;
