import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import FractalTree from '../components/FractalTree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const [showTypingEffect, setShowTypingEffect] = useState(false);

  useEffect(() => {
    // Simulate typing effect after a delay
    const timeout = setTimeout(() => {
      setShowTypingEffect(true);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-b from-[#2fe898ae] to-[#2fe89834] flex items-center justify-center relative overflow-hidden p-4 md:p-0">
      <div className="text-center z-10">
        <motion.h1
          className="text-3xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-48 md:h-64 w-48 md:w-64 mx-auto mb-4">
            {/* <FractalTree/> */}
            <img src='/paperfly1.gif' className="h-full w-full object-cover" alt="Fractal Tree Animation" />
          </div>
          {showTypingEffect && (
            <TypingEffect text="hi, Bijay Tamang here. |" />
          )}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-[#8892b0] mb-8 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="block mb-2 text-3xl md:text-5xl text-[#8892b0]">I create stuff sometimes.</span>
          <span className="block">
            I'm a software engineer from Toronto, Canada. I'm fascinated by large-scale, high-impact products and contributed to major feature launches in industry-leading services as well as apps that have 100M+ installs.
          </span>
        </motion.p>

        <motion.a
          href="#contact"
          className="text-accent border font-bold border-accent px-6 py-3 md:px-8 md:py-4 rounded hover:bg-opacity-80 transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-xl md:text-3xl" />
          &nbsp;&nbsp;Say Hi
        </motion.a>

      </div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-accent rounded-full"
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
              opacity: [1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayText !== text) {
        setDisplayText(text.substring(0, displayText.length + 1));
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed (milliseconds)

    return () => clearInterval(interval);
  }, [displayText, text]);

  // Function to wrap the specified word in a span with accent color and increased font size
  const highlightWord = (fullText, wordToHighlight) => {
    const regex = new RegExp(`\\b${wordToHighlight}\\b`, 'gi');
    const highlightedText = fullText.replace(regex, `<span class="text-accent md:text-7xl sm:text-3xl">${wordToHighlight}</span>`);
    return { __html: highlightedText };
  };

  return <span dangerouslySetInnerHTML={highlightWord(displayText, 'Bijay Tamang')} />;
};

export default Hero;
