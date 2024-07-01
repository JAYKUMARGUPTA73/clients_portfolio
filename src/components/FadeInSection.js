import React from 'react';
import { motion } from 'framer-motion';

const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-8"
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
