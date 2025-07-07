import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-5xl text-cyan mb-10">About Me</h2>
      <p className="text-black">
        I'm a curious and detail-oriented software developer with a background
        in public health and hands-on experience in clinical research. My
        journey from healthcare to tech has equipped me with a unique,
        interdisciplinary perspective and appreciation for effective
        communication to tackle challenging problems as a team. I am always keen
        to learn new technologies and finding opportunities for tech solutions.
        Let's build something great together!
      </p>
      <a href="/akwok-cv.pdf" target="_blank" rel="noopener noreferrer">
        <button className="border border-babyBlue rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-cyan transition-all duration-500 cursor-pointer md:self-start sm:self-center text-black hover:text-pureWhite">
          My CV
        </button>
      </a>
    </div>
  );
};

export default AboutMeText;
