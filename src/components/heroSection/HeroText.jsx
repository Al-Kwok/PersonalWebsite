import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-3xl sm:text-xl text-orange"
      >
        <span className="animate-waving">👋</span> Hello
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-8xl sm:text-6xl font-bold font-special text-black"
      >
        <span className="text-babyBlue">I'm </span>
        <br />
        Alex Kwok
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-grey"
      >
        A Passionate Web Developer
        <br />
        with 3 years of experience.
      </motion.p>
    </div>
  );
};

export default HeroText;
