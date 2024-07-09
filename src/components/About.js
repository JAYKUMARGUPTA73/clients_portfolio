import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.001, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    
    <section
      id="about"
      className="py-20 md:pl-28 bg-gradient-to-b from-[#2fe89834] to-[#2fe8980f] text-[#8892b0]"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-8 text-[#ccd6f6]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-10 flex items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100">
              /about me
            </h2>
            <div className="w-1/4 h-[2px] mt-4 bg-[#233554] ml-4"></div>
          </div>
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row items-center"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 text-md md:text-xl font-medium leading-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="about-description mb-6 md:leading-9">
              <p className="mb-4">
                I am currently a <b>Software Development Engineer</b> at{" "}
                <a
                  href="https://www.aboutamazon.com/"
                  className="text-accent font-bold"
                >
                  Amazon
                </a>
                , working in the AWS sector under team Route 53. At the same
                time, I am undertaking a part-time <b>Master's of Science</b>{" "}
                in <b>Software Engineering</b> at{" "}
                <a href="https://www.ox.ac.uk/about" className="text-accent">
                  University of Oxford
                </a>
                .
              </p>
              <p className="mb-4">
                Here are some technologies I have been working with:
              </p>
              <ul className="flex flex-wrap list-disc pl-5 md:leading-10">
                <li className="w-1/2 md:w-1/2">Typescript</li>
                <li className="w-1/2 md:w-1/2">Python</li>
                <li className="w-1/2 md:w-1/2">React.js</li>
                <li className="w-1/2 md:w-1/2">Java</li>
                <li className="w-1/2 md:w-1/2">JavaScript ES6+</li>
                <li className="w-1/2 md:w-1/2">C#</li>
              </ul>
              <p className="mt-4">
                Outside of work, I'm interested in following the developments
                of science. I also play a lot of video games. And make TikToks.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                alt="Gazi Jarin"
                src="/OIP.jpeg"
                className="w-full h-auto md:h-56  object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
