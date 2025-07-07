import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Electronic Health Record App",
    year: "Mar2024",
    align: "right",
    image: "appLandPg.jpg",
    link: "https://github.com/Al-Kwok/Electronic-Health-Record",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px[ mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-8">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
