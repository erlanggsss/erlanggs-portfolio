'use client';

import React from 'react';
import { motion } from 'motion/react';

const SectionDivider = ({ label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.5 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="section-divider"
    >
      <span className="whitespace-nowrap">{label}</span>
    </motion.div>
  );
};

export default SectionDivider;
