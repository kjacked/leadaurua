"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Pricing</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Flexible Pricing That Grows with You
            </h1>
            <p className="md:text-md">
              Our pricing plans are designed to fit your needs, whether you're
              just starting out or scaling up. Choose the package that aligns
              with your business goals and watch your lead generation efforts
              thrive.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="See Pricing Plans" variant="secondary">
                See Pricing Plans
              </Button>
              <Button
                title="Inquire"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Inquire
              </Button>
            </div>
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
