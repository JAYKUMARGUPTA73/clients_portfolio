import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    id: 1,
    title: "AMAZON",
    company: "Software Development Engineer @ Amazon",
    period: "JUL 2022 - PRESENT",
    description: [
      "Led development of end-to-end region build automation across Route 53 (AWS's DNS web service). This enabled the launch of customer-facing global services in new regions within a day, a significant reduction from the previous time-frame of a month.",
      "Re-built Route 53's core domain management and DNS systems to provide a better user experience to millions of customers.",
    ],
  },
  {
    id: 2,
    title: "WATTPAD",
    company: "Associate Engineer @ Wattpad",
    period: "MAY 2020 - APR 2021",
    description: [
      "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).",
      "Iteratively built web experiences for 80 million users across high-traffic pages.",
      "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
    ],
  },
  {
    id: 3,
    title: "UNIVERSITY OF TORONTO",
    company: "Research Engineer @ University of Toronto",
    period: "MAY 2021 - SEPT 2021",
    description: [
      "Developed and researched an NLP-based framework using state-of-the-art tools like Spacy and Stanza to facilitate the derivation of requirements from health data by leveraging syntactic dependencies, entity-recognition and rule-based match-making.",
      "Application selected for DCS Research Award ($4,000) as part of the ”Visualizing Privacy Analysis Results” project led by Professor Marsha Chechik."
    ],
  },
  {
    id: 4,
    title: "CENTIVIZER",
    company: "Software Developer @ Centivizer",
    period: "SEPT 2019 - APR 2020",
    description: [
      "Developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
      "Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia.",
    ],
  },
  {
    id: 5,
    title: "ORANGE GATE",
    company: "Software Developer Intern @ Orange Gate",
    period: "MAY 2019 - AUG 2019",
    description: [
      "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sensors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home.",
      "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
      "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB.",
    ],
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5 // Adjust as needed
  });

  // Effect to animate on navigation change
  useEffect(() => {
    // Reset animation state when activeExperience changes
    if (ref.current) {
      ref.current.style.opacity = 0;
      ref.current.style.transform = 'translateY(50px)';
      setTimeout(() => {
        ref.current.style.opacity = 1;
        ref.current.style.transform = 'translateY(0)';
      }, 100); // Adjust delay as needed
    }
  }, [activeExperience]); // Run effect whenever activeExperience changes

  return (
    <div id="experience" className="min-h-screen bg-gradient-to-b from-[#2fe8980f] to-[#0c422a00] pl-24 text-[#8892b0] flex">
      <div className="w-full md:w-1/2 bg-gradient-to-b from-[#0c422a00] to-[#0c422a00] ">
      <div className="mb-10 flex items-center">
            <h2 className="text-5xl text-[#8892b0] font-bold text-gray-100">
              / experience
            </h2>
            <div className="w-1/4 h-[2px] mt-4 bg-[#233554] ml-4"></div>
          </div>
        <ul className="space-y-4 pl-8 md:pl-4">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              onClick={() => setActiveExperience(exp)}
              className={`cursor-pointer p-4 text-md pl-16 leading-3 font-medium flex items-center ${
                activeExperience.id === exp.id
                  ? "text-accent"
                  : "hover:bg-[#112240]"
              }`}
            >
              {exp.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-3/4 p-8">
        <div ref={ref} className="my-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-3xl font-bold mb-2">
              <span>{activeExperience.company.split("@")[0]}</span>
              <span className="text-accent"> @{activeExperience.company.split("@")[1]}</span>
            </div>
            <div className="text-xl mb-10">
              {activeExperience.period}
            </div>
            {Array.isArray(activeExperience.description) ? (
              <ul className="list-disc text-xl font-medium max-w-30 leading-10 list-inside space-y-2">
                {activeExperience.description.map((desc, index) => (
                  <li key={index} className="list-none">
                    <span className="text-accent mr-2">▹</span>{desc}
                  </li>
                ))}
              </ul>
            ) : (
              <div>{activeExperience.description}</div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
