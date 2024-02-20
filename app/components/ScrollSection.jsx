'use client';

import { gsap } from 'gsap/dist/gsap';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

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
            <div className="bg-white h-[50vh] w-[50vw] relative">
              <span className="absolute top-0 left-0 z-10 p-3">
                Swimming pool Area
              </span>
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/assets/image_1.jpg"
                alt="picture of a swimming pool"
                fill
                priority
              />
            </div>
          </div>
          <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="bg-white h-[50vh] w-[50vw] relative">
              <span className="absolute top-0 left-0 z-10 p-3">
                Swimming pool Area
              </span>
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/assets/image_1.jpg"
                alt="picture of a swimming pool"
                fill
                priority
              />
            </div>
          </div>
          <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="bg-white h-[50vh] w-[50vw] relative">
              <span className="absolute top-0 left-0 z-10 p-3">
                Swimming pool Area
              </span>
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/assets/image_1.jpg"
                alt="picture of a swimming pool"
                fill
                priority
              />
            </div>
          </div>
          <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="bg-white h-[50vh] w-[50vw] relative">
              <span className="absolute top-0 left-0 z-10 p-3">
                Swimming pool Area
              </span>
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/assets/image_1.jpg"
                alt="picture of a swimming pool"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
