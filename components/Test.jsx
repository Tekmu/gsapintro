'use client';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Test = () => {
  const container = useRef();
  const tl = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    tl.current = gsap.timeline().from('.box', {
      opacity: 0,
      x: isOpen ? -100 : 100, // Slide in from left if open, from right if closed
      duration: 1,
      ease: 'power2.out', // Use easing for smoother animation
    });
  }, [isOpen]);

  const onClickToggle = () => {
    setIsOpen(!isOpen);
    if (!tl.current.isActive()) {
      tl.current.reversed(!tl.current.reversed());
    }
  };

  return (
    <div
      ref={container}
      className="flex min-h-screen w-full bg-slate-500 justify-around items-center container"
    >
      <div
        className={`flex flex-row justify-between gap-4 ${
          isOpen ? 'visible' : 'hidden'
        }`}
      >
        <div id="left" className="box bg-slate-400 w-[100px] h-[100px]">
          Left
        </div>
        <div id="right" className="box bg-yellow-400 w-[100px] h-[100px]">
          right
        </div>
      </div>
      <div>
        <button
          onClick={onClickToggle}
          className="good bg-slate-300 rounded-md p-2 text-white"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </div>
  );
};

export default Test;
