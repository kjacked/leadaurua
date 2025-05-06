"use client";

import React from "react";

export function Layout24() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/images/lead-scoring-hero.png"
                className="size-12"
                alt="Relume logo"
              />
            </div>
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Intelligent Lead Scoring: Focus on Your Most Promising Prospects
            </h3>
            <p className="md:text-md">
              LeadAura's Intelligent Lead Scoring assigns a score to each lead
              based on their likelihood to convert. By analyzing behavioral
              data, our AI identifies the most promising prospects, ensuring
              your team concentrates on leads with the highest potential.
            </p>
          </div>
          <div>
            <img
              src="/images/lead-scoring-hero.png"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
