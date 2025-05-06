"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Empower Your Business with Intelligent Automation and Seamless
              Lead Management
            </h1>
            <p className="md:text-md">
              At Laura, we transform the way you manage leads by providing
              actionable insights at your fingertips. Our AI-driven approach
              ensures you stay ahead of the competition, optimizing every
              opportunity for growth.
            </p>
          </div>
          <div>
            <img
              src="/images/about-hero.png"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
