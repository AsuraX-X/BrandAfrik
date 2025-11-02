import Background from "@/components/General/Background";
import GetInTouchBtn from "@/components/General/GetInTouchBtn";
import ExpandingContainers from "@/components/Home/ExpandingContainers";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import Impact from "@/components/Home/Impact";
import Projects from "@/components/Home/Projects";
import StartAnimation from "@/components/Home/StartAnimation";
import We from "@/components/Home/We";
import Why from "@/components/Home/Why";
import Yap from "@/components/Home/Yap";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <StartAnimation />
      <section className="flex mt-20 relative justify-center pointer-events-none px-35">
        <Background direction="b" />

        <HeroSection />
      </section>
      <section className="px-35">
        <Yap />
      </section>
      <section className="mt-25">
        <ExpandingContainers />
      </section>
      <section className="px-35 mt-40">
        <Projects />
      </section>
      <section>
        <We />
      </section>
      <section>
        <Impact />
      </section>
      <section>
        <Why />
      </section>
      <section className="mt-120 flex items-center px-10 justify-between bg-black bg-[url(/bba.svg)] h-[240px] max-w-6xl mx-auto w-full">
        <p className="text-6xl font-light max-w-2xl">
          Ready to turn your idea into a tool for change?
        </p>
        <GetInTouchBtn />
      </section>
      <section className="mt-40 relative">
        <Background direction="t" />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
