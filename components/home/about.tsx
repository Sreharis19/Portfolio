// Copyright Sreehari Soman 2023, 2024. All Rights Reserved.
// Project: portfolio
// Author: Sreehari Soman
// License: MIT License (https://opensource.org/licenses/MIT)

import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutSection = () => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const [willChange, setWillChange] = useState(false);

  const initAboutAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement>,
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .to(quoteRef.current.querySelector(".about-1"), { opacity: 0.2, delay: 0.5 })
      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-2"), { opacity: 0.2, delay: 1 })
      .fromTo(
        quoteRef.current.querySelector(".about-3"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-3"), { opacity: 0.2, delay: 1 });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setWillChange(self.isActive),
    });

    return scrollTriggerInstance;
  };

  useEffect(() => {
    const aboutScrollTriggerInstance = initAboutAnimation(quoteRef, targetSection);
    return aboutScrollTriggerInstance.kill;
  }, [quoteRef, targetSection]);

  const renderQuotes = (): React.ReactNode => (
    <h1
      ref={quoteRef}
      className="font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-relaxed max-w-4xl mx-auto text-center"
    >
      <span
        className={`about-1 block mb-4 ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        <strong className="text-indigo-400">Passionate Full Stack Developer,</strong> integrating robust backend with dynamic frontend.
      </span>
      <span
        className={`about-2 block mb-4 ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        Strong foundation in <strong className="text-indigo-400">modern web architectures</strong> with a focus on high-performance applications.
      </span>
      <span
        className={`about-3 block ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        Crafting scalable solutions to drive <strong className="text-indigo-400">user engagement</strong> and optimize efficiency.
      </span>
    </h1>
  );

  return (
    <section
      className="tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container bg-gradient-to-r from-gray-800 to-black"
      ref={targetSection}
    >
      {renderQuotes()}
    </section>
  );
};

export default AboutSection;
