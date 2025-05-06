"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Flexible Pricing That Grows with You
            </h1>
            <p className="md:text-md">
              Our Enterprise package is designed for large-scale operations,
              offering premium integrations and 24/7 AI-driven customer support.
              Experience custom automation solutions tailored to your business
              needs, ensuring seamless lead management and enhanced
              productivity.
            </p>
          </div>
          <div>
            <img
              src="/images/pricing-hero.png"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
