'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Services from "./components/Services";


export default function Home() {
  const [isDarkmode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) 
    && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if(isDarkmode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkmode])

  return (
    <>
    <Navbar isDarkmode={isDarkmode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkmode={isDarkmode} />
    <About isDarkmode={isDarkmode} />
    <Services isDarkmode={isDarkmode} />
    <Project isDarkmode={isDarkmode} />
    <Contact isDarkmode={isDarkmode} />
    <Footer isDarkmode={isDarkmode} />
    </>
  );
}
