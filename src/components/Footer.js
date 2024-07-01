import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0c422a00] to-[#0c422a00] bg-gradient-to-l from-[#0c422a00] to-[#0c422a00] text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">John Doe</h3>
            <p className="mb-4">Passionate Full Stack Developer crafting innovative solutions and pushing the boundaries of web technology.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
            <ul className="space-y-2">
              <li>React</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>AWS</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-400" />
                <a href="mailto:john@example.com" className="hover:text-blue-400 transition-colors duration-300">gazijarin@gmail.com</a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-400" />
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors duration-300">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 Built and designed by Gazi Jarin.
          All rights reserved. ©</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;