"use client";

import React from "react";

export function Layout12() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Automated Cold Calling: Engage Leads Anytime, Anywhere with
              Laura's AI Technology
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Experience the power of 24/7 automated outreach that keeps your
              sales pipeline full. With Laura, you can initiate follow-ups and
              warm up prospects effortlessly.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/images/services-icons.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Engage Leads
                </h6>
                <p>
                  Reach out to potential customers at any time, ensuring no lead
                  is missed.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/images/services-icons.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Boost Sales
                </h6>
                <p>
                  Warm up prospects effectively, making your sales team's job
                  easier and more productive.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/services-icons.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
