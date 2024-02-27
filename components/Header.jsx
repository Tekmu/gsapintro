'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
  const container = useRef();
  // store the timeline in a ref.
  const tl = useRef();

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap.timeline().to('.box', {
        xPercent: -100,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut', // Use easing for smoother animation
      });
    },
    { scope: container }
  ); // <-- scope for se

  return (
    <nav className="container-fluid nav flex items-center bg-white text-black h-10 w-full">
      nav section
    </nav>
  );
};

export default Header;
