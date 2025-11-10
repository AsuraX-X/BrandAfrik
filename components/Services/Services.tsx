"use client";
import React from "react";
import GetInTouchBtn from "../General/GetInTouchBtn";
import Image from "next/image";
import { motion } from "motion/react";

const Services = () => {
  const stuff = [
    {
      color: "#DB4437",
      image: "/logoDev.svg",
      text1:
        "We partner with your team to design and build custom digital solutions that streamline operations and drive results.",
      text2:
        "Using a collaborative design thinking approach, we craft tools tailored to your brand; making your smarter faster,and more efficient.",
      services: [
        "Web App Development",
        "Mobile App Development",
        "Custom Software Solutions",
      ],
    },
    {
      color: "#F2B401",
      image: "/logoCre.svg",
      text1:
        "Our creative team works hand-in-hand with yours to craft bold, market-ready brands and products.",
      text2:
        "Using top-tier tools and a collaborative creative process, we shape every detail to meet your vision and exceed expectations.",
      services: [
        "Brand Design",
        "Modelling and Rendering ",
        "Product Design",
        "Photography and Video Production",
        "Modelling and Rendering ",
      ],
    },
    {
      color: "#109E5A",
      image: "/logoGrow.svg",
      text1:
        "At Grow, we empower young people and professionals by building real-world skills, our way of giving back to the communities we care about.",
      text2:
        "Through our MasterClasses, we teach in-demand tech skills that open doors, spark ideas, and fuel careers.",
      services: [
        "Master Classes",
        "IT Training and Support for corporate organizations",
      ],
    },
  ];

  return (
    <div className="flex mt-10 gap-10 md:gap-0 flex-col">
      {stuff.map((_) => (
        <div
          key={_.color}
          className="flex relative md:flex-row gap-8 sm:max-h-140 lg:h-[420px] flex-col"
        >
          <motion.div
            initial={{ position: "absolute" }}
            whileInView={{ width: "50%" }}
            transition={{ delay: 0.5 }}
            className={`w-full h-full max-w-screen hidden  md:flex items-center min-h-70 justify-center bg-[${_.color}]`}
          >
            <Image
              src={`${_.image}`}
              alt="Brand Afrik logo"
              width={40}
              height={40}
              className="w-1/2 h-1/2"
            />
          </motion.div>
          <div
            className={`w-full h-full flex items-center min-h-70 justify-center bg-[${_.color}]`}
          >
            <Image
              src={`${_.image}`}
              alt="Brand Afrik logo"
              width={40}
              height={40}
              className="w-1/2 h-1/2"
            />
          </div>
          <div className="w-full flex flex-col justify-between px-6 py-4">
            <div>
              <div>
                <p className="text-3xl mb-5">{_.text1}</p>
                <p>{_.text2}</p>
              </div>
              <div className="flex gap-4 mb-4 flex-wrap font-thin max-w-[600px] mt-8">
                {_.services.map((service, i) => (
                  <span key={i} className="px-3 py-1 bg-[#323232]">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <GetInTouchBtn />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
