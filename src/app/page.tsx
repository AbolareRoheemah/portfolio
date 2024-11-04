"use client"
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    const aosConfig = {
      duration: 1000,
      once: false,
      offset: 100,
      useClassNames: true,
      easing: 'ease-out-cubic' as const // Fixing the type error by asserting the type
    }
    
    AOS.init(aosConfig)
  }, [])

  return (
    <div className="min-h-screen min-w-screen max-w-[100vw]">
      <div className="">
        <Jumbotron />
      </div>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
          <div>
            <Works />
          </div>
          <div>
            <Blogs />
          </div>
          <div>
            <Contact />
          </div>
    </div>
  );
}
