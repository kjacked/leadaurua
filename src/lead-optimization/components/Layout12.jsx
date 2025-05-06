"use client";

import React from "react";

export function Layout12() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Optimize Your Lead Engagement with LeadAura’s AI-Driven Solutions
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Maximize the value of every lead with LeadAura’s advanced
              AI-powered lead optimization features. Our platform analyzes lead
              behavior, prioritizes high-value leads, and ensures personalized
              engagement strategies are applied at the perfect moment.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/images/scoring-and-behavior.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Intelligent Lead Scoring
                </h6>
                <p>
                  LeadAura assigns scores based on conversion likelihood,
                  focusing your efforts on high-potential leads.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/images/scoring-and-behavior.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Behavioral Analysis
                </h6>
                <p>
                  Our AI predicts optimal engagement times, enhancing your
                  chances for successful conversions.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/scoring-and-behavior.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
