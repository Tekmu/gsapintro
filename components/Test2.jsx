'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Box = ({ children }) => {
  return (
    <div id="left" className="box bg-white text-black w-[500px] h-screen">
      {children}
    </div>
  );
};

const Test2 = () => {
  const container = useRef();
  // store the timeline in a ref.
  const tl = useRef();

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap.timeline().to('.box', {
        xPercent: -100,
        duration: 1,
        ease: 'power2.inOut', // Use easing for smoother animation
      });
    },
    { scope: container }
  ); // <-- scope for selector text (optional)

  const onClickToggle = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed());
  });

  return (
    <div
      ref={container}
      className="flex min-h-screen w-full bg-black justify-between items-center"
    >
      <div className="flex flex-row">
        <Box>Box</Box>
      </div>
      <div>
        <button
          onClick={onClickToggle}
          className="good bg-slate-300 rounded-2xl w-36 p-2 text-white"
        >
          Menu
        </button>
      </div>
    </div>
  );
};

export default Test2;
