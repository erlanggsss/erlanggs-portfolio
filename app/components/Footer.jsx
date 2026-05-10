'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, COPYRIGHT_YEAR } from '../constants';

const Footer = () => {
  const socialIcons = [
    {
      label: 'Email',
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <polyline points="2,3 12,13 22,3" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: PERSONAL_INFO.github,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: PERSONAL_INFO.linkedin,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="px-6 lg:px-16 xl:px-24 py-8 border-t border-[var(--border-color)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialIcons.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== 'Email' ? '_blank' : undefined}
              rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={social.label}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-[var(--text-muted)]">
          © {COPYRIGHT_YEAR} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
