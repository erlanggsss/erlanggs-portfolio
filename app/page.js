'use client';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Experience />
        <Project />
      </main>
      <Footer />
    </>
  );
}
