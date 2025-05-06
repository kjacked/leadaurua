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
                src="/images/crm-workflow.png"
                className="size-12"
                alt="Relume logo"
              />
            </div>
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Streamline Your Workflow with Seamless CRM Integration
            </h3>
            <p className="md:text-md">
              Our CRM integration effortlessly connects with all major
              platforms, ensuring your data is always organized and current.
              Experience hassle-free management that empowers your sales team to
              focus on what matters most—closing deals.
            </p>
          </div>
          <div>
            <img
              src="/images/crm-workflow.png"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
