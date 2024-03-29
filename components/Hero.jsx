'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Header from './Header';

const Hero = () => {
  const comp = useRef(null);

  // Use useGSAP hook instead of useLayoutEffect
  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.set('#intro-slider', { opacity: 1 })
      .from('#intro-slider', {
        xPercent: '-100',
        duration: 1.3,
        delay: 0.5,
      })
      .from(['#title-1', '#title-2', '#title-3'], {
        opacity: 0,
        y: '+=30',
        delay: 1,
        stagger: 1,
      })
      .to(['#title-1', '#title-2', '#title-3'], {
        opacity: 0,
        y: '-=30',
        delay: 1,
        stagger: 1,
      })
      .to('#intro-slider', {
        xPercent: '-100',
        delay: 1,
        duration: 1.6,
      });
    t1.set('.box', { opacity: 1 }).from('.box', {
      duration: 1.3,
      delay: 0.5,
    });

    t1.from(['#welcome', '#sub-title'], {
      opacity: 0,
      duration: 1,
      stagger: 1.5,
    });
  }, []); // Empty dependency array means it will run only once

  return (
    <header ref={comp} className="flex relative min-h-screen flex-col">
      <div
        id="intro-slider"
        className="flex flex-col justify-center opacity-0 items-center w-full h-screen absolute top-0 left-0 z-10 p-10 bg-gray-50 tracking-tight text-black text-3xl gap-4 font-playfair_display"
      >
        <span id="title-1">
          Discover Tranquility in Zambia&apos;s Western Province
        </span>
        <span id="title-2">Where Nature Meets Comfort</span>
        <span id="title-3">Experience Authentic Hospitality</span>
      </div>
      <Header />
      <div className="app flex flex-col justify-center h-screen">
        <div className="box flex flex-col items-center justify-center opacity-0">
          <h1
            id="welcome"
            className="font-bold font-montserrat text-4xl md:text-7xl text-gray-200"
          >
            WELCOME TO.
          </h1>
          <h2
            id="sub-title"
            className="text-3xl md:text-7xl text-gray-200 font-playfair_display"
          >
            LISELI LODGE
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Hero;
