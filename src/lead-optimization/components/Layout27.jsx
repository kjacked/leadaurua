"use client";

import React from "react";

export function Layout27() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Harness the Power of Behavioral Analysis for Lead Engagement
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              LeadAura leverages advanced machine learning to analyze lead
              behavior, ensuring you engage at the right moment. This predictive
              capability increases your chances of conversion significantly.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  90%
                </h3>
                <p>Engage leads when they are most receptive.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  95%
                </h3>
                <p>Maximize conversions with timely interactions.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/follow-ups-list.png"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
