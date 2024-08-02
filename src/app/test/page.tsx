"use client";
import React, { useRef } from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Test() {
  const el = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".test", {
      x: 0,
      opacity: 1,
      rotate: "360deg",
      scrollTrigger: {
        trigger: ".w-test",
        // markers: true,
        start: "top 800px",
        end: "bottom 500px",
        scrub: true,
      },
    });
    return () => {
      gsap.killTweensOf(".test");
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".test-1",
            markers: true,
            start: "top 920px",
            end: "bottom 700px",
            scrub: true,
          },
        })
        .fromTo(
          "#img-1",
          {
            opacity: 0,
            y: 160,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#img-2",
          {
            opacity: 0,
            y: 160,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#img-3",
          {
            opacity: 0,
            y: 160,
          },
          {
            opacity: 1,
            y: 0,
          }
        );
    }, el);

    return () => {
      gsap.killTweensOf(".test-1");
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center"></div>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-test">
          <Image
            src={"/img/jbl.png"}
            alt="mclaren"
            width={800}
            height={800}
            className="test"
          />
        </div>
      </div>

      <div
        className="h-screen w-full flex items-center justify-center"
        ref={el}
      >
        <div className="h-full w-full flex items-center justify-center">
          <Image
            id="img-1"
            src={"/img/black-woman.png"}
            alt="mclaren"
            width={300}
            height={300}
            className="test-1"
          />
        </div>
        <div className="h-full w-full flex items-center justify-center">
          <Image
            id="img-2"
            src={"/img/black-woman.png"}
            alt="mclaren"
            width={300}
            height={300}
            className="test-1"
          />
        </div>
        <div className="h-full w-full flex items-center justify-center">
          <Image
            id="img-3"
            src={"/img/black-woman.png"}
            alt="mclaren"
            width={300}
            height={300}
            className="test-1"
          />
        </div>
      </div>
    </>
  );
}
