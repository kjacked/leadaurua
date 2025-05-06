"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout10() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Simplified</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Transform Your Lead Management with AI
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Say goodbye to tedious lead management. Laura's AI-driven system
              streamlines your processes, allowing you to focus on what truly
              matters—growing your business.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/images/home-benefits.png"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Automated Outreach
                </h6>
                <p>24/7 lead engagement that never misses an opportunity.</p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/images/home-benefits.png"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Seamless Integration
                </h6>
                <p>
                  Easily connects with your existing CRM for a smooth
                  transition.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Start" variant="secondary">
                Start
              </Button>
              <Button
                title="Demo"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Demo
              </Button>
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
