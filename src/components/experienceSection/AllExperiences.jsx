import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Clinical Research Assistant",
    company: "Arthritis Research Canada",
    date: "2018 - 2022",
    responsibilities: ["Managed operations of a Canada-Wide randomized controlled clinical study", "Coordinated the delivery of 50+ return-to-work program for workers with arthritis  ", "Built an online interactive educational program to help workers with arthritis to deal with work place challenges ", "Liason with international researchers to discuss adoption of the Making it Work program in other countries"],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl text-orange lg:hidden sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
