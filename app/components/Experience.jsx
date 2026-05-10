'use client';

import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES, CERTIFICATES } from '../constants';
import SectionDivider from './SectionDivider';

const Experience = () => {
  return (
    <section id="experience" className="px-6 lg:px-16 xl:px-24 scroll-mt-20">
      <SectionDivider label="EXPERIENCE SECTION" />

      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-8"
        >
          EXPERIENCE
        </motion.p>

        {/* Timeline */}
        <div className="mb-16">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                <h3 className="text-base font-semibold">
                  {exp.role}{' '}
                  <span className="font-normal text-[var(--text-secondary)]">at</span>{' '}
                  <span className="font-bold">{exp.company}</span>
                </h3>
                <span className="text-sm text-[var(--text-muted)] whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs text-[var(--accent)] mb-2 font-medium">
                {exp.location}
              </p>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
            CERTIFICATES
          </p>

          <ul className="space-y-3">
            {CERTIFICATES.map((cert, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] flex-shrink-0" />
                <span>
                  {cert.text}{' '}
                  <span className="font-semibold text-[var(--text-primary)]">
                    {cert.highlight}
                  </span>
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
