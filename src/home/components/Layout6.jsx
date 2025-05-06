"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Transform Your Lead Management with AI-Powered Automation and
              Integration
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Are you still managing leads manually? Discover how Laura can
              streamline your process.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  The Challenge
                </h6>
                <p>
                  Manual lead management is time-consuming and hinders your
                  business growth.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  The Solution
                </h6>
                <p>
                  Automate lead qualification and boost conversions effortlessly
                  with Laura.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/home-benefits.png"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
