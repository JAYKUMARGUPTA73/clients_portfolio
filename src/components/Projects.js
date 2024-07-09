import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const spotlightProjects = [
  {
    title: "No Man's Land",
    desc: "A third-person survival-mode game where you battle against time and space to return to Earth.",
    techStack: "C# (UNITY)",
    link: "https://github.com/slakh96/no-mans-land",
    open: "https://gazijarin.itch.io/no-mans-land",
    image: "/nomansland.png",
  },
  {
    title: "Truth",
    desc: "A three.js simulation of the planet system revolving around a monolith.",
    techStack: "JAVASCRIPT (THREE.JS)",
    link: "https://github.com/gazijarin/truth",
    open: "https://gazijarin.github.io/Truth/",
    image: "/truth.png",
  },
  {
    title: "Tall Tales",
    desc: "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
    techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
    link: "https://github.com/gazijarin/TallTales",
    open: "https://talltales.herokuapp.com/",
    image: "/talltales.png",
  },
  {
    title: "Portfolio.js",
    desc: "A small JS library that helps with clear and succinct data presentation.",
    techStack: "NODE.JS (EXPRESS.JS)",
    link: "https://github.com/gazijarin/Portfolio.js",
    open: "https://afternoon-ocean-92382.herokuapp.com/",
    image: "/portfolio.png",
  },
];

const projects = [
  {
    title: "TDSB Homework Management Interface",
    desc: "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
    techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
    link: "https://github.com/gazijarin/TDSBHomeworkManagement",
    open: "https://tdsb-app.herokuapp.com/",
  },
  {
    title: "Adam A.I.",
    desc: "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
    techStack: "Javascript, HTML / CSS",
    link: "https://github.com/gazijarin/adamai",
    open: "https://gazijarin.github.io/AdamAI/",
  },
  {
    title: "Distributed Logging and Monitoring System",
    desc: "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
    techStack: "Node.js (Express.js), React.js, PostgreSQL",
    link: "https://github.com/gazijarin/Distributed-Logging-and-Monitoring-System",
  },
  {
    title: "Odin Bot",
    desc: "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
    techStack: "Javascript, Node.js, Natural NLP, Telegram API",
    link: "https://github.com/gazijarin/OdinBot",
  },
  {
    title: "Game Centre",
    desc: "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
    techStack: "Java, Android Studio",
    link: "https://github.com/gazijarin/gamecentre",
  },
  {
    title: "Minimax Stonehenge",
    desc: "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
    techStack: "Python",
    link: "https://github.com/gazijarin/stonehenge",
  },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.0001,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % spotlightProjects.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % spotlightProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + spotlightProjects.length) % spotlightProjects.length
    );
  };

  return (
    <motion.div
  className="relative"
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.5 }}
  ref={ref}
>
    <div id="projects" className="md:pl-28 md:mt-20 bg-gradient-to-b from-[#0c422a00] to-[#0c422a00] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Spotlight Projects Carousel */}
        <div className="mb-16">
          <div className="mb-10 flex flex-col sm:flex-row items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#8892b0] font-bold text-gray-100 mb-4 sm:mb-0">
              / pet projects
            </h2>
            <div className="w-full sm:w-1/4 h-[2px] bg-[#233554] sm:ml-4"></div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                initial={{ translateX: `-${currentSlide * 100}%` }}
                animate={{ translateX: `-${currentSlide * 100}%` }}
                transition={{ type: "tween", duration: 0.5 }}
              >
                {spotlightProjects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      ref={ref}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 sm:h-80 md:h-96 rounded-3xl object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 flex flex-col p-4 sm:p-6 text-[#ccd6f6] bg-gradient-to-t from-black/50 to-transparent">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">
                          {project.title}
                        </h3>
                        <div className="text-center">
                          <p className="text-sm sm:text-base mb-2">{project.desc}</p>
                          <p className="text-xs sm:text-sm font-medium text-accent">
                            {project.techStack}
                          </p>
                        </div>
                        <div className="flex justify-center mt-2">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mr-4 text-gray-300 hover:text-white transition-colors duration-300"
                            >
                              <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                          )}
                          {project.open && (
                            <a
                              href={project.open}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                              <FontAwesomeIcon
                                icon={faExternalLinkAlt}
                                size="lg"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              &#10095;
            </button>
          </div>
        </div>

        {/* Regular Projects Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="h-auto sm:h-96 bg-[#112240] leading-normal sm:leading-10 bg-gray-800 rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                ref={ref}
              >
                <div className="flex justify-between items-center bg-[#112240] px-4 py-2">
                  <div className="folder-icon">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                  <div className="external-links">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-4 text-gray-100 hover:text-accent transition-colors duration-300"
                      >
                        <FontAwesomeIcon icon={faGithub} size="sm" className="sm:text-lg" />
                      </a>
                    )}
                    {project.open && (
                      <a
                        href={project.open}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-100 hover:text-accent transition-colors duration-300"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" className="sm:text-lg" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="card-body p-4 sm:p-6">
                  <div className="card-title text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-100">
                    {project.title}
                  </div>
                  <div className="card-desc text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                    {project.desc}
                  </div>
                  <div className="card-tech flex flex-wrap gap-2">
                    {project.techStack.split(", ").map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center bg-gray-700 rounded-full px-2 py-1"
                      >
                        <span className="text-xs sm:text-sm text-gray-400">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Projects;
