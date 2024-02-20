'use client';

import { gsap } from 'gsap/dist/gsap';

import { useRef, useEffect } from 'react';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { TextPlugin } from 'gsap/dist/TextPlugin';

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner h-[100vh] w-[400vw] flex flex-row relative"
        >
          <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="bg-white h-[50vh] w-[50vw]">Section 1</div>
          </div>
          <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="bg-white h-[50vh] w-[50vw]">Section 2</div>
          </div>
          <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="bg-white h-[50vh] w-[50vw]">Section 3</div>
          </div>
          <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="bg-white h-[50vh] w-[50vw]">Section 4</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
