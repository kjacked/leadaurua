"use client";

import React from "react";

export function Layout18() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Flexible Pricing That Grows with You
            </h3>
            <p className="mb-5 md:mb-6 md:text-md">
              Our pricing plans are designed to accommodate businesses of all
              sizes. Choose the package that best fits your needs and watch your
              growth soar.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/images/enterprise-options.png"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <p>Starter: Ideal for small businesses or startups.</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/images/enterprise-options.png"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <p>Growth: Advanced features for scaling businesses.</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/images/enterprise-options.png"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <p>
                  Enterprise: Premium support and custom automation options.
                </p>
              </li>
            </ul>
          </div>
          <img
            src="/images/enterprise-options.png"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
