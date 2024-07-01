import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs, faHtml5, faCss3, faGit, faDocker, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React', level: 90, icon: faReact, description: 'JavaScript library for building user interfaces.' },
  { name: 'Node.js', level: 85, icon: faNodeJs, description: 'JavaScript runtime environment for server-side development.' },
  { name: 'JavaScript', level: 95, icon: faJs, description: 'High-level, interpreted programming language.' },
  { name: 'TypeScript', level: 80, icon: faCode, description: 'Typed superset of JavaScript that compiles to plain JavaScript.' },
  { name: 'HTML5', level: 90, icon: faHtml5, description: 'Standard markup language for creating web pages and web applications.' },
  { name: 'CSS3', level: 85, icon: faCss3, description: 'Style sheet language used for describing the presentation of a document written in HTML or XML.' },
  { name: 'MongoDB', level: 75, icon: faDatabase, description: 'NoSQL database program, using JSON-like documents with optional schema.' },
  { name: 'PostgreSQL', level: 70, icon: faDatabase, description: 'Powerful, open-source object-relational database system.' },
  { name: 'Git', level: 85, icon: faGit, description: 'Distributed version control system for tracking changes in source code during software development.' },
  { name: 'Docker', level: 70, icon: faDocker, description: 'Open platform for developing, shipping, and running applications inside containers.' },
  { name: 'AWS', level: 65, icon: faAws, description: 'Secure cloud services platform, offering computing power, storage, and other functionality to help businesses scale and grow.' },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold as needed
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: -90,
        transition: { duration: 0.3, delay: i * 0.1 },
        rootMargin: '0px 0px 100% 0px'
      }));
    }
  }, [controls, inView]);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#0c422a00] to-[#0c422a00] text-gray-100">
      <div className="container mx-auto px-6 pl-28">
      <div className=" flex items-center">
            <h2 className="text-5xl text-[#8892b0] font-bold text-gray-100">
              / skills
            </h2>
            <div className="w-1/4 h-[2px] mt-4 bg-[#233554] ml-4"></div>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-28">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-700 rounded-lg shadow-lg p-6 cursor-pointer"
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={index}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <FontAwesomeIcon icon={skill.icon} className="text-4xl text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              </div>
              <div
                className="w-full bg-gray-600 rounded-full h-4"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <motion.div
                  className="bg-accent h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
