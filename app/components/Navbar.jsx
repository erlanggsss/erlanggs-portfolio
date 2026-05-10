'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'motion/react';
import ContactModal from './ContactModal';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Project', href: '#project' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-16 xl:px-24 py-4 flex items-center justify-between bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-color-light)]"
      >
        {/* Left — Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 link-hover"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-[var(--text-primary)] transition-colors"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-[var(--text-primary)] transition-colors"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-[var(--text-primary)] transition-colors"
          />
        </button>

        {/* Right — Icons & Badge */}
        <div className="flex items-center gap-4">
          {/* Contact icon */}
          <button
            onClick={() => setIsContactOpen(true)}
            aria-label="Open contact form"
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--chip-bg)] transition-colors duration-200"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <polyline points="2,3 12,13 22,3" />
            </svg>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--chip-bg)] transition-colors duration-200"
          >
            {theme === 'dark' ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* OPEN TO WORK badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-[var(--border-color)] rounded-full text-xs font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-500 blink-dot" />
            <span>OPEN TO WORK</span>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--bg-primary)] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}

            {/* OPEN TO WORK badge (mobile) */}
            <div className="flex items-center gap-2 px-3 py-1.5 border border-[var(--border-color)] rounded-full text-xs font-medium tracking-wide mt-4">
              <span className="w-2 h-2 rounded-full bg-green-500 blink-dot" />
              <span>OPEN TO WORK</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Navbar;
