
"use client";
import { a, to, useTrail } from "@react-spring/web";
import Image from "next/image";
import bg from "@/public/images/Meteor 1.svg";
import HomeBackground from "./HomeBackground";
import pc from "@/public/images/WhatsApp Image 2024-07-09 at 12.01.48_0f598099.jpg";


import Link from "next/link";

import { useObservedSprings } from "@/components/utils/useObservedSpring";

import animation from "@/components/animations/animations";

// import Link from "../../clickable/Link";

export default function Home() {
  const {
    observedRef,
    springAnimate: [
      layoutTransformTrail,
      layoutOpacityTrail,
      bgLineGlowTrail,
      bgLineRevealTrail,
    ],
  } = useObservedSprings(
    [
      ...animation.layout.reveal.start,
      animation.bg.lineGlow.start,
      animation.bg.lineReveal.start,
    ],
    [
      ...animation.layout.reveal.end.map((x) => x()),
      animation.bg.lineGlow.end({ delay: 750 }),
      animation.bg.lineReveal.end({ delay: 750 }),
    ],
    [
      (cb: Function) => useTrail(5, cb, []),
      (cb: Function) => useTrail(5, cb, []),
      (cb: Function) => useTrail(9, cb, []),
      (cb: Function) => useTrail(9, cb, []),
    ]
  );

  const layoutReveal = (index: number) => ({
    transform: to(layoutTransformTrail[index].y, (y) => `translateY(${y}px)`),
    opacity: to(layoutOpacityTrail[index].opacity, (op: number) => `${op}`),
  });

  return (
    <div id="home">

   
    <section
      className="home py-[100px] md:py-[120px]   "
      id="content"
      ref={observedRef}
    >
      {/* <div className="absolute -mt-28">
        <div className="animate-color-change">
          <Image src={bg} alt="Background Image" />
        </div>
      </div> */}
      <div className="flex justify-center mb-8">
        <Image
          src={pc}
          className="rounded-full w-40 sm:w-60"
          alt="Author Picture"
        />
      </div>
      <header className="self-center text-center">
        <a.h1
          className="text-grey-1 dark:text-grey-d text-[50px] md:text-[72px] lg:text-[100px] leading-[1] font-extrabold mx-6"
          style={layoutReveal(1)}
        >
          <div className="inline-block relative w-0">
            <a.div
              className={`
                select-none font-extrabold font-mono
                text-grey-2 dark:text-grey-b
                text-[20px] md:text-[24px] 
                absolute -top-[8px] -left-[40px]
              `}
              style={layoutReveal(0)}
              aria-label={"I AM"}
            >
              I<span className="text-blue-200 dark:text-blue-d-200">'</span>m
            </a.div>
            <span className="invisible">I'm</span>
          </div>
          <span className="font-gaMaamli">VICTOR EZEABIKWA</span>
        </a.h1>
      </header>
      <p className="text-sm md:text-xl lg:text-xl text-gray-500 mb-4 mt-7 md:mb-8 lg:mb-12 flex lg:max-w-[80%] max-w-[90%] mx-auto font-aboreto text-center">
        Are you looking to build an innovative product, feature, or website?
        Look no further! With my extensive experience and proven track record, I
        can help turn your ideas into tangible, successful projects.
      </p>
      <a.div
        className="flex flex-wrap gap-6 call-to-action-buttons self-center"
        style={layoutReveal(4)}
      >
       <div className="flex flex-row justify-center mx-auto lg:space-x-10   space-x-4 space-y-0">
  <Link
    className="btn text-white bg-blue-500 hover:bg-blue-600 px-4 py-1 md:px-6 md:py-4 lg:px-8 lg:py-1 shadow-md rounded-md"
    href="#"
  >
    Checkout my work
  </Link>
  <Link
    className="btn text-black border-2 border-black hover:bg-blue-100 hover:text-blue-600 px-4 py-1 md:px-6 md:py-1 lg:px-8 lg:py-1 shadow-md rounded-md"
    href="/VictorEzeabikwaResume.pdf"
    download
  >
    Resume
    <svg
      className="pl-2"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#"
      viewBox="0 0 256 256"
    >
      <path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H72a8,8,0,0,1,0,16H32v64H224V136H184a8,8,0,0,1,0-16h40A16,16,0,0,1,240,136Zm-117.66-2.34a8,8,0,0,0,11.32,0l48-48a8,8,0,0,0-11.32-11.32L136,108.69V24a8,8,0,0,0-16,0v84.69L85.66,74.34A8,8,0,0,0,74.34,85.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"></path>
    </svg>
  </Link>
</div>

      </a.div>
     
    </section>
    </div>
  );
}
