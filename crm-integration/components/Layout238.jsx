"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout238() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Seamless Integration for Enhanced Lead Management with LeadAura
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="/images/crm-hero-landscape.png"
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Effortless CRM Connectivity for Streamlined Sales Processes
            </h3>
            <p>
              Integrate LeadAura with your CRM to optimize your lead management
              effortlessly.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Connect
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="/images/crm-hero-landscape.png"
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Real-Time Data Synchronization for Accurate Lead Tracking
            </h3>
            <p>
              Ensure your CRM is always updated with real-time lead information.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Sync
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="/images/crm-hero-landscape.png"
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Customizable Integration Tailored to Your Unique Sales Workflow
            </h3>
            <p>
              Adapt LeadAura to fit your specific sales processes for maximum
              efficiency.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Customize
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
