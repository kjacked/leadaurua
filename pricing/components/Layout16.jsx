"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout16() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Growth</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Advanced Features for Scaling Businesses
            </h1>
            <p className="mb-5 text-base md:mb-6 md:text-md">
              Our Growth package is tailored for businesses on the rise,
              offering advanced tools to enhance efficiency. Experience
              automated cold calling and in-depth analytics to drive your
              success.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/images/pricing-hero.png"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <span>Automated cold calling for seamless outreach.</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/images/pricing-hero.png"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <span>In-depth analytics to track your progress.</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/images/pricing-hero.png"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <span>Scalable solutions to meet your growing needs.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="See" variant="secondary">
                See
              </Button>
              <Button
                title="Plans"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Plans
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
