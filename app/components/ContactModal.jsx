'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ContactModal = ({ isOpen, onClose }) => {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const validateForm = (formData) => {
    const errors = {};
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    if (name.trim().length < 2) errors.name = 'Name must be at least 2 characters';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) errors.email = 'Please enter a valid email';
    if (message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
    return errors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormErrors({});
    const formData = new FormData(event.target);
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setResult('Please fix the errors below');
      return;
    }
    setIsSubmitting(true);
    setResult('Sending...');
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success) {
        setResult('Message sent successfully!');
        event.target.reset();
        setTimeout(() => { setResult(''); onClose(); }, 2000);
      } else {
        setResult(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setResult('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-3 text-sm bg-[var(--chip-bg)] border ${hasError ? 'border-red-500' : 'border-[var(--chip-border)]'} rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="modal-content"
          >
            <button onClick={onClose} aria-label="Close contact form"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[var(--chip-bg)] transition-colors text-[var(--text-muted)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <h3 className="text-xl font-semibold mb-1">Get in touch</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">I would love to hear from you. Send me a message!</p>
            <form onSubmit={onSubmit} aria-label="Contact form">
              <div className="space-y-4">
                <div>
                  <input type="text" name="name" placeholder="Your name" required disabled={isSubmitting} className={inputClass(formErrors.name)} />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <input type="email" name="email" placeholder="Your email" required disabled={isSubmitting} className={inputClass(formErrors.email)} />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>
                <div>
                  <textarea name="message" rows="4" placeholder="Your message" required disabled={isSubmitting} className={inputClass(formErrors.message) + ' resize-none'} />
                  {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                </div>
              </div>
              <button type="submit" disabled={isSubmitting}
                className="mt-5 w-full py-3 px-6 bg-[var(--text-primary)] text-[var(--bg-primary)] text-sm font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
              {result && <p className="mt-3 text-center text-sm font-medium text-[var(--text-secondary)]">{result}</p>}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
