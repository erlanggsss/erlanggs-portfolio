'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';

const Header = () => {
  // Parse markdown-style bold (**text**) in the subtext
  const renderSubtext = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-[var(--text-primary)]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: PERSONAL_INFO.linkedin,
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7,7 17,7 17,17" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: (
        <span className="text-xs font-medium">@</span>
      ),
    },
    {
      label: 'GitHub',
      href: PERSONAL_INFO.github,
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16,18 22,12 16,6" /><polyline points="8,6 2,12 8,18" />
        </svg>
      ),
    },
  ];

  return (
    <header
      id="top"
      className="min-h-screen flex items-center px-6 lg:px-16 xl:px-24 pt-20"
      role="banner"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-16">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1"
        >
          <p className="text-sm text-[var(--text-secondary)] mb-3">
            Hello I&apos;m{' '}
            <span className="font-semibold text-[var(--text-primary)]">
              {PERSONAL_INFO.name}
            </span>
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-tight tracking-tight mb-6">
            {PERSONAL_INFO.headline.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < PERSONAL_INFO.headline.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
            {renderSubtext(PERSONAL_INFO.subtext)}
          </p>

          {/* Social link chips */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-[var(--border-color)] rounded-full hover:border-[var(--text-muted)] transition-colors duration-200"
              >
                {link.label}
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-48 sm:w-56 lg:w-72 xl:w-80 flex-shrink-0"
        >
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--chip-bg)]">
            <Image
              src="/profile.png"
              alt={`${PERSONAL_INFO.name} profile picture`}
              width={640}
              height={853}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
