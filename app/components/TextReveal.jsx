'use client';

import { gsap } from 'gsap/dist/gsap';
import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const TextReveal = () => {
  const [lettersRef, setlettersRef] = useArrayRef();

  function useArrayRef() {
    const lettersRef = useRef([]);
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const reveal = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top center',
        end: 'bottom 80%',
        scrub: true,
      },
      color: '#2A2A2A',
      duration: 10,
      stagger: 1,
    });

    return () => {
      reveal.kill();
    };
  }, []);

  const text =
    'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip';
  return (
    <div className="reveal bg-yellow-600 min-h-screen flex items-center">
      <div ref={triggerRef} className="pl-[12%] pr-[14%] mb-10">
        {text.split('').map((letter, index) => (
          <span
            className="reveal-text font-extrabold text-5xl"
            ref={setlettersRef}
            key={index}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextReveal;
