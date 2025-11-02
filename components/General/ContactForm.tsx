"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState, MouseEvent as ReactMouseEvent } from "react";

const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const [interests, setInterests] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");

  useEffect(() => {
    console.log(interests);
  }, [interests]);

  const handleClick = (e: ReactMouseEvent<HTMLButtonElement>) => {
    const val = (e.target as HTMLButtonElement).value;
    if (interests.includes(val)) {
      setInterests(interests.filter((interest) => interest !== val));
    } else setInterests((prev) => [...prev, val]);
  };

  const check = (val: string) => {
    if (interests.includes(val)) return true;
    else return false;
  };

  // options for the interest buttons (keeps values consistent and avoids hard-coding)
  const interestOptions = [
    "Brand Identity Design",
    "Web Development",
    "Product Design",
    "Custom Software",
  ];

  const budgetOptions = [
    "< 1,500",
    "1,500 - 5,000",
    "5,000 - 10,000",
    "10,000 - 25,000",
    "> 25,000",
  ];

  return (
    // allow native scrolling inside this element while Lenis is active
    <div
      data-lenis-prevent
      className="bg-[#000201] text[18px] font-light py-4 px-6 w-[680px] h-screen overflow-y-auto hide-scrollbar"
    >
      <div className="flex items-center mb-8 text-xl/tight gap-6">
        <h1>
          You’ll need to tell us a bit about your project. Our team would review
          the details and get back in touch with you.
        </h1>
        <button onClick={onClose}>
          <i className="ri-close-circle-line ri-xl" />
        </button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full border-b border-white focus-visible:outline-0 px-2 py-6"
          placeholder="Your name"
        />
        <div className="flex mt-10 gap-6">
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border-b border-white focus-visible:outline-0 px-2 py-6"
            placeholder="Your email"
          />

          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border-b border-white focus-visible:outline-0 px-2 py-6"
            placeholder="Your phone number"
          />
        </div>
        <div className="mt-10">
          <p className="text-white/50">What are you interested in?</p>
          <div className="space-x-4 space-y-4 mt-4">
            {interestOptions.map((opt) => (
              <motion.button
                key={opt}
                animate={{
                  backgroundColor: check(opt) ? "#ffffff" : "#000000",
                  color: check(opt) ? "#000000" : "#ffffff",
                }}
                className="border cursor-pointer border-white py-4 px-6"
                type="button"
                name="interest"
                value={opt}
                onClick={handleClick}
              >
                {opt}
              </motion.button>
            ))}
          </div>
        </div>

        <textarea
          id="project"
          name="project"
          className="w-full border-b border-white focus-visible:outline-0 px-2 py-6"
          rows={3}
          placeholder="Tell us about your project"
        />
        <div className="mt-10">
          <p className="text-white/50">Project budget (USD)</p>
          <div className="space-x-4 space-y-4 mt-4">
            {budgetOptions.map((opt) => (
              <motion.button
                key={opt}
                animate={{
                  backgroundColor: opt === budget ? "#ffffff" : "#000000",
                  color: opt === budget ? "#000000" : "#ffffff",
                }}
                className="border cursor-pointer border-white py-4 px-6"
                type="button"
                name="interest"
                value={opt}
                onClick={() => setBudget(opt)}
              >
                {opt}
              </motion.button>
            ))}
          </div>
        </div>
        <div className="flex items-center py-4 gap-2">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className=" appearance-none peer cursor-pointer size-5 border-white bg-black border"
              required
            />
            <span className="absolute text-white flex inset-0 justify-center items-center opacity-0 peer-checked:opacity-100 pointer-events-none">
              <i className="ri-check-line" />
            </span>
          </div>
          <label htmlFor="agree">I agree with the privacy policy</label>
        </div>
        <button
          className="bg-white flex justify-center items-center gap-2 text-black w-full py-2 font-bold text-xl"
          type="submit"
        >
          Send your request
          <Image
            src={"/GetInTouchAlt.svg"}
            width={30}
            height={30}
            alt="Get in touch"
          />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
