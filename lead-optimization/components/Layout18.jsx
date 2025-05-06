"use client";

import React from "react";

export function Layout18() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Automated Follow-Ups: Stay Engaged with Tailored Communication for
              Every Lead
            </h3>
            <p className="mb-5 md:mb-6 md:text-md">
              With LeadAura's automated follow-up system, you’ll never miss a
              chance to connect. Our platform customizes follow-up sequences
              based on each lead’s behavior, ensuring timely and relevant
              engagement.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/images/follow-ups-list.png"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <p>Tailored follow-ups for every unique lead interaction.</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/images/follow-ups-list.png"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <p>Keep leads engaged through timely automated responses.</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/images/follow-ups-list.png"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <p>
                  Maximize conversions with personalized follow-up strategies.
                </p>
              </li>
            </ul>
          </div>
          <img
            src="/images/follow-ups-list.png"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
