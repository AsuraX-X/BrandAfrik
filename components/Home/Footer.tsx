import React from "react";
import Background from "../General/Background";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-screen">
      <Image
        src={"/ba.svg"}
        alt="Brand Afrik"
        width={0}
        height={0}
        className="w-full h-full"
      />
    </div>
  );
};

export default Footer;
