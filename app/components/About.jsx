'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ABOUT } from '../constants';
import SectionDivider from './SectionDivider';

const About = () => {
  return (
    <section id="about" className="px-6 lg:px-16 xl:px-24 scroll-mt-20">
      <SectionDivider label="ABOUT SECTION" />

      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4"
        >
          ABOUT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-2"
        >
          {ABOUT.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[var(--text-secondary)] text-sm mb-8"
        >
          {ABOUT.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-[var(--text-secondary)] leading-relaxed mb-10 max-w-2xl"
        >
          {ABOUT.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
            TECH STACK
          </p>
          <div className="flex flex-wrap gap-2">
            {ABOUT.techStack.map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
