'use client';

import { useRef, useLayoutEffect } from 'react';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package

const Hero = () => {
  //   const container = useRef();
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(
        '#intro-slider',
        { xPercent: '-100' },
        {
          xPercent: '0',
          duration: 1.6,
          delay: 1,
        }
      )
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
        })
        .from(['#welcome', '#sub-title'], {
          opacity: 0,
          duration: 1.6,
          stagger: 1.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  //   useGSAP(
  //     () => {
  //       // gsap code here...
  //       gsap.to('.box', { stagger: 0.1, duration: 3 }); // <-- automatically reverted
  //     },
  //     { scope: container }
  //   ); // <-- scope for selector text (optional)

  return (
    <header
      ref={comp}
      className="flex relative min-h-screen flex-col items-center justify-center"
    >
      <div
        id="intro-slider"
        className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 z-10 p-10 bg-gray-50 tracking-tight text-black text-3xl gap-4 font-playfair_display"
      >
        <span id="title-1">
          Discover Tranquility in Zambias Western Province
        </span>
        <span id="title-2">Where Nature Meets Comfort</span>
        <span id="title-3">Experience Authentic Hospitality</span>
      </div>

      <div className="app">
        <div className="box flex flex-col gap-30 justify-center items-center">
          <h1
            id="welcome"
            className="font-bold font-montserrat text-7xl text-gray-200"
          >
            WELCOME TO.
          </h1>
          <h2
            id="sub-title"
            className="text-5xl text-gray-200 font-playfair_display"
          >
            LISELI LODGE
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Hero;
