"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout241() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Features</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Explore Our Advanced Cold Calling Features
              </h2>
              <p className="md:text-md">
                Our AI-powered cold calling system is designed to enhance your
                outreach strategy. Experience seamless engagement with leads
                through intelligent automation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  src="/images/ai-driven_solutions_20250505_190808.png"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                AI-Lead Qualification for Targeted Outreach
              </h3>
              <p>Utilize AI to identify and prioritize high-quality leads.</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  src="/images/ai-driven_solutions_20250505_190808.png"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personalized Messaging for Every Lead
              </h3>
              <p>
                Craft tailored messages that resonate with individual prospects.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  src="/images/ai-driven_solutions_20250505_190808.png"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Integrated Appointment Scheduling for Efficiency
              </h3>
              <p>Schedule appointments seamlessly within the call process.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">Learn More</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
