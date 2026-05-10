'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import SectionDivider from './SectionDivider';

const Project = () => {
  return (
    <section id="project" className="px-6 lg:px-16 xl:px-24 scroll-mt-20 pb-20">
      <SectionDivider label="PROJECT SECTION" />

      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-8"
        >
          SELECTED WORKS
        </motion.p>

        {/* Project list */}
        <div className="space-y-0">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="border-t border-[var(--border-color)] py-8 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Number + Title */}
                <div className="flex items-center gap-4 sm:gap-6 flex-1">
                  <span className="text-sm text-[var(--text-muted)] font-medium tabular-nums min-w-[2rem]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="hidden sm:block w-12 h-[1px] bg-[var(--border-color)]" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 max-w-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="tech-chip text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Code link */}
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors self-start mt-1"
                  >
                    code
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7,7 17,7 17,17" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm border border-[var(--border-color)] rounded-full hover:border-[var(--text-muted)] transition-colors duration-200"
          >
            View all projects
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
