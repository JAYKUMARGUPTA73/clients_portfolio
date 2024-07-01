import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEdit } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1aa568] shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="hero" smooth duration={500}>
            <h1 className="text-2xl ntr-regular font-bold text-white cursor-pointer mr-6">Bijay Tamang</h1>
          </Link>
          <ul className="hidden md:flex space-x-6 ml-2 text-accent font-medium">
            {['Home', 'About', 'Experience', 'Projects'].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  className="hover:text-accent text-white cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-500"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-500"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-100 hover:text-gray-500"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            <Link
              to="blog"
              smooth
              duration={500}
              className="text-gray-100 hover:text-gray-500 cursor-pointer"
            >
              <FontAwesomeIcon icon={faEdit} size="lg" />
            </Link>
          </div>
          <button
            className="md:hidden text-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden px-6 py-3">
          <ul className="flex flex-col space-y-4 font-medium text-white">
            {['Home', 'About', 'Experience', 'Projects'].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  className="hover:text-accent text-white cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6 mt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-500"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-500"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-100 hover:text-gray-500"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            <Link
              to="blog"
              smooth
              duration={500}
              className="text-gray-100 hover:text-gray-500 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faEdit} size="lg" />
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
