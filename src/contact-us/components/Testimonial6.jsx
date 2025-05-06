"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Customer testimonials
          </h1>
          <p className="md:text-md">
            Our clients love the results we've delivered!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold md:text-xl">
              "Laura transformed our lead generation process completely!"
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/ai-driven_solutions_20250505_190808.png"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold">John Doe</p>
                <p>CEO, Tech Solutions</p>
              </div>
              <div className="hidden w-px self-stretch bg-black md:block" />
              <div>
                <img
                  src="/images/ai-driven_solutions_20250505_190808.png"
                  alt="Webflow logo 1"
                  className="max-h-12"
                />
              </div>
            </div>
          </div>
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold md:text-xl">
              "The integration was seamless and efficient!"
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/ai-driven_solutions_20250505_190808.png"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold">Jane Smith</p>
                <p>Manager, Real Estate</p>
              </div>
              <div className="hidden w-px self-stretch bg-black md:block" />
              <div>
                <img
                  src="/images/ai-driven_solutions_20250505_190808.png"
                  alt="Webflow logo 1"
                  className="max-h-12"
                />
              </div>
            </div>
          </div>
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold md:text-xl">
              "Our sales have skyrocketed since we started using Laura!"
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/ai-driven_solutions_20250505_190808.png"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold">Emily Johnson</p>
                <p>Director, Marketing Agency</p>
              </div>
              <div className="hidden w-px self-stretch bg-black md:block" />
              <div>
                <img
                  src="/images/ai-driven_solutions_20250505_190808.png"
                  alt="Webflow logo 1"
                  className="max-h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
