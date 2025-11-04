import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-screen flex items-end">
      <Image
        src={"/ba.svg"}
        alt="Brand Afrik"
        width={0}
        height={0}
        className="w-full"
      />
    </div>
  );
};

export default Footer;
