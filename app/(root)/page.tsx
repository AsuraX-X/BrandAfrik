import ExpandingContainers from "@/components/Home/ExpandingContainers";
import HeroSection from "@/components/Home/HeroSection";
import Impact from "@/components/Home/Impact";
import Projects from "@/components/Home/Projects";
import StartAnimation from "@/components/Home/StartAnimation";
import We from "@/components/Home/We";
import Why from "@/components/Home/Why";
import Yap from "@/components/Home/Yap";
import React from "react";

const Home = () => {
  return (
    <div>
      <StartAnimation />
      <HeroSection />
      <Yap />
      <ExpandingContainers />
      <Projects />
      <We />
      <Impact />
      <Why />
    </div>
  );
};

export default Home;
