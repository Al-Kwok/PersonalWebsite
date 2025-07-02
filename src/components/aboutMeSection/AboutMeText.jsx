import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-black'>
            Hi there! I'm a senior Software Engineering student with a passion for building meaningful, scalable, and user-focused digital solutions. Over the past few years, I’ve developed a strong foundation in full-stack development, data structures, algorithms, and software design principles. I enjoy working across the stack — from crafting intuitive user interfaces to designing robust backend systems.
            Through internships, academic projects, and hackathons, I’ve collaborated on a range of applications, gaining hands-on experience with technologies like React, Node.js, Python, Java, and SQL. I’m also deeply curious about system design, cloud computing, and leveraging AI to solve real-world problems.
            I'm always excited to learn new technologies, take on new challenges, and contribute to projects that have a positive impact. Whether it’s debugging a tricky issue or brainstorming features with a team, I thrive on turning ideas into working code.
            Let’s build something great together!
        </p>
        <button className='border border-babyBlue rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-cyan transition-all duration-500 cursor-pointer md:self-start sm:self-center text-black hover:text-pureWhite'>My Projects</button>
    </div>
  )
}

export default AboutMeText