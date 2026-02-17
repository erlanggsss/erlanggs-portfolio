import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
  
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormErrors({});
    
    const formData = new FormData(event.target);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setResult("Please fix the errors below");
      return;
    }

    setIsSubmitting(true);
    setResult("Sending....");

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully! I'll get back to you soon.");
        event.target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        console.error("Error", data);
        setResult("❌ " + (data.message || "Something went wrong. Please try again."));
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("❌ Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] 
    bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      
      <motion.h4
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'>
            Connect with me</motion.h4>

        <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'>
            Get in touch</motion.h2>

        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I'd love to hear from you! If you have any questions, comments, or feedback,
            please use the form below.
        </motion.p>

        <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit} className='max-w-2xl mx-auto' aria-label="Contact form">
          <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
           
            <div className='flex-1'>
              <motion.input
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              type="text" placeholder='Enter your name' required className={`flex-1 w-full p-3 outline-none border-[0.5px]
              ${formErrors.name ? 'border-red-500' : 'border-gray-400'} rounded-md bg-white dark:bg-darkHover/30 dark:border:white/90`} 
              name='name' aria-label="Your name" disabled={isSubmitting}/>
              {formErrors.name && <p className='text-red-500 text-xs mt-1'>{formErrors.name}</p>}
            </div>

            <div className='flex-1'>
              <motion.input
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              type="email" placeholder='Enter your email' required className={`flex-1 w-full p-3 outline-none border-[0.5px]
              ${formErrors.email ? 'border-red-500' : 'border-gray-400'} rounded-md bg-white dark:bg-darkHover/30 dark:border:white/90`} 
              name='email' aria-label="Your email" disabled={isSubmitting}/>
              {formErrors.email && <p className='text-red-500 text-xs mt-1'>{formErrors.email}</p>}
            </div>

          </div>
          
          <div>
            <motion.textarea
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            rows='6' placeholder='Enter your message' required className={`w-full p-4 outline-none border-[0.5px]
            ${formErrors.message ? 'border-red-500' : 'border-gray-400'} rounded-md bg-white mb-2 dark:bg-darkHover/30 dark:border:white/90`} 
            name='message' aria-label="Your message" disabled={isSubmitting}></motion.textarea>
            {formErrors.message && <p className='text-red-500 text-xs mb-4'>{formErrors.message}</p>}
          </div>

          <motion.button
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          transition={{ duration: 0.3 }}
          type='submit'
          disabled={isSubmitting}
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto 
          hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover disabled:opacity-50 disabled:cursor-not-allowed'>
            {isSubmitting ? 'Sending...' : 'Submit now'} <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>
          
          {result && <p className={`mt-4 text-center font-medium ${result.includes('✅') ? 'text-green-600 dark:text-green-400' : result.includes('❌') ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'}`}>{result}</p>}
        </motion.form>
    </motion.section>
  )
}




export default Contact
